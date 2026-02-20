/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import SbArbitrLogo from '../assets/сб_арбитр.svg';
import AirLogo from '../assets/AIR_лого.svg';
import AuPubLogo from '../assets/au_logo.svg';
import { Shield, BarChart, FileText, SquareCheckBig, Users, Briefcase, Award, ArrowRight, CheckCircle, MoreHorizontal } from 'lucide-react';
import sbSlide1 from '../assets/lk_blur_1.jpg';
import sbSlide2 from '../assets/lk_blur_2.jpg';

import auSlide1 from '../assets/скрин_1_публикатор.jpg';
import auSlide2 from '../assets/скрин_2_публикатор.jpg';
import auSlide3 from '../assets/скрин_3_публикатор.jpg';
import auSlide4 from '../assets/скрин_4_публикатор.jpg';
import auSlide5 from '../assets/скрин_5_публикатор.jpg';
import auSlide6 from '../assets/скрин_6_публикатор.jpg';

import aiSlide1 from '../assets/скрин_1_референт.jpg';
import aiSlide2 from '../assets/скрин_2_референт.jpg';
import aiSlide3 from '../assets/скрин_3_референт.jpg';

const Home = () => {
  const [activeTab, setActiveTab] = useState('sb-arbitr');
  const [comment, setComment] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [activeRoleTab, setActiveRoleTab] = useState('au');


  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('7') || value.startsWith('8')) value = value.substring(1);
    if (value.length > 10) value = value.substring(0, 10);
    
    let formatted = '+7 ';
    if (value.length > 0) formatted += '(' + value.substring(0, 3);
    if (value.length > 3) formatted += ') ' + value.substring(3, 6);
    if (value.length > 6) formatted += '-' + value.substring(6, 8);
    if (value.length > 8) formatted += '-' + value.substring(8, 10);
    
    setPhone(formatted);
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const tabsData = {
    'sb-arbitr': {
      title: "Страховой брокер для арбитражных управляющих",
      features: ["Бесплатное использование сервиса", "Быстрый расчет стоимости по всем страховым компаниям в одном месте"],
      link: "/sb-arbitr",
      // Добавили внешнюю ссылку
      externalLink: "https://xn--80abb2a1bcbn.xn--p1ai/", 
      siteUrlSSPBID: 'https://passport.sspb.ru/',
      images: [sbSlide2, sbSlide1]
    },
    'ai-referent': {
      title: "Анализ движения денежных средств, подозрительных сделок и контрагентов",
      features: ["Автоматическое формирование отчетов", "Обработка больших массивов данных"],
      link: "/ai-referent",
      // Добавили внешнюю ссылку
      externalLink: "https://ai-referent.ru/",
      siteUrlSSPBID: 'https://passport.sspb.ru/',
      images: [aiSlide1, aiSlide2, aiSlide3]
    },
    'au-publicator': {
      title: "Публикации в «КоммерсантЪ» за считанные минуты без юридических рисков",
      features: ["Бесплатное использование сервиса", "Создание публикации за 7 шагов"],
      link: "/au-publicator",
      // Добавили внешнюю ссылку
      externalLink: "https://au-publicator.ru/",
      siteUrlSSPBID: 'https://passport.sspb.ru/',
      images: [auSlide1, auSlide2, auSlide3, auSlide4, auSlide5, auSlide6]
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Lead Form Data:", Object.fromEntries(formData));
    
    // Вместо alert открываем наше окно
    setIsSuccess(true);
    
    // Очищаем форму (опционально)
    e.target.reset();
    setComment('');
    setPhone('');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            // ИЗМЕНЕНО: text-3xl для мобилки, md:text-5xl для десктопа
            className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            ССПБ ID – единая платформа сервисов для сопровождения процедур банкротства
          </motion.h1>
          {/* ИЗМЕНЕНО: text-lg для мобилки, md:text-2xl для десктопа */}
          <p className="text-lg md:text-2xl mb-8 text-[#00396a] md:text-[#00396a]">
            Страхование, банковское обслуживание, финансовый анализ сделок должников, публикации в «Ъ» и управление процедурами – все на одной платформе с единым входом
          </p>
        </div>

        {/* Hero Cards (UPDATED) */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "СБ Арбитр", 
              desc: "Страхование ответственности арбитражных управляющих\nи организация банковского обслуживания", 
              icon: SbArbitrLogo,
              link: "/sb-arbitr",
              gradient: "from-[#215e5e] to-[#7CE2E2]",
              shadowColor: "#215e5e",
              // Самый большой — ограничиваем высоту чуть сильнее, чтобы не доминировал
              logoHeight: "h-22 mt-1", 
              logoShadow: "drop-shadow(0 15px 25px rgba(17, 0, 53, 0.5))"
            },
            { 
              title: "AI Referent", 
              desc: "Анализ банковских выписок должников", 
              icon: AirLogo, 
              link: "/ai-referent",
              gradient: "from-[#611885] to-[#BB7FE5]",
              shadowColor: "#611885",
              // Самый маленький — даем ему максимум высоты, чтобы он подтянулся к остальным
              logoHeight: "h-9 mt-8", 
              logoShadow: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.25))"
            },
            { 
              title: "АУ-Публикатор", 
              desc: "Автоматическая генерация сообщений в «Ъ»", 
              icon: AuPubLogo, 
              link: "/au-publicator",
              gradient: "from-[#cc0011] to-[#1A00FF]",
              shadowColor: "#1A00FF",
              // Средний — золотая середина
              logoHeight: "h-24 mt-3", 
              logoShadow: "drop-shadow(0 15px 25px rgba(17, 0, 53, 0.5))"
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              // Используем динамический градиент из данных карточки
              className={`bg-gradient-to-br ${card.gradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full text-white`}
            >
              {/* Иконка в белом круге с прозрачностью */}
              {/* Логотип: сохраняет пропорции, ограничен по высоте и ширине */}
              <div className="mb-8 h-24 flex items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  // Теперь высота и тень берутся ИЗ ДАННЫХ каждой карточки
                  className={`w-auto object-contain ${card.logoHeight}`}
                  style={{
                    filter: card.logoShadow
                  }}
                />
              </div>
                          
              <p className="text-xl md:text-md text-white text-center mb-8 flex-grow whitespace-pre-line">{card.desc}</p>
              
              {/* Обновленная кнопка "Подробнее" */}
              {/* mx-auto центрирует кнопку, px-8 задает компактную ширину по тексту */}
              <Link 
                to={card.link}
                className="mx-auto flex items-center justify-center px-8 py-2.5 rounded-full border border-white text-white text-md font-medium transition-all duration-300 hover:bg-white hover:text-[#00396a] hover:shadow-lg"
              >
                Подробнее
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="bg-[#1976d2] py-10 rounded-[40px] mb-20 shadow-sm mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white mb-8">
            Платформа продуктов <br className="block md:hidden" /> ССПБ ID
        </h2>
          
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {Object.keys(tabsData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === key ? 'bg-[#00396a] text-white shadow-lg' : 'bg-gray-100 text-neutral hover:bg-gray-200'
                }`}
              >
                {key === 'sb-arbitr' ? 'СБ Арбитр' : key === 'ai-referent' ? 'AI Referent' : 'АУ-Публикатор'}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 bg-[#c0dcf7] p-8 md:p-12 rounded-[32px] text-white shadow-xl flex flex-col justify-center h-full"
            >
              <h3 className="text-2xl text-[#00396a] md:text-3xl font-bold mb-6 leading-tight">{tabsData[activeTab].title}</h3>
              <ul className="space-y-4 mb-10">
                {tabsData[activeTab].features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-3 transition-all duration-300 transform hover:translate-x-2 hover:drop-shadow-md cursor-default"
                  >
                    <SquareCheckBig className="text-[#00396a] shrink-0 mt-1" size={20} />
                    <span className="text-lg text-[#00396a]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a 
                  href={tabsData[activeTab].siteUrlSSPBID}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-white text-[#00396a] hover:shadow-xl cursor-pointer"
                >
                  <span>Заполнить заявку</span>
                </a>
              </div>
            </motion.div>

            <div className="relative lg:col-span-3">
               <ImageCarousel images={tabsData[activeTab].images} variant="compact"/>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#00396a] mb-8 md:mb-12">
            Платформа ССПБ ID — это готовые решения для каждого
        </h2>

        {(() => {
            // Выносим данные в массив для удобного рендера и в мобилке, и на десктопе
            const rolesData = [
                {
                    id: 'au',
                    title: "Арбитражным управляющим",
                    icon: Users,
                    points: ["Полный контроль процедур", "Страхование через единый интерфейс", "Автоматизация публикаций"]
                },
                {
                    id: 'insurance',
                    title: "Страховым компаниям и банкам",
                    icon: Briefcase,
                    points: ["Анализ рисков", "Прямой доступ к клиентам"]
                },
                {
                    id: 'team',
                    title: "Командам сопровождения",
                    icon: Award,
                    points: ["Управление командой", "Взаимодействие с арбитражными управляющими", "Генерация отчетов"]
                }
            ];

            const activeRole = rolesData.find(r => r.id === activeRoleTab);

            return (
                <>
                    {/* --- МОБИЛЬНАЯ ВЕРСИЯ (Табы + 1 Карточка) --- */}
                    <div className="md:hidden">
                        {/* Табы друг под другом */}
                        <div className="flex flex-col items-center gap-3 mb-8">
                            {rolesData.map((role) => (
                                <button
                                    key={role.id}
                                    onClick={() => setActiveRoleTab(role.id)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all text-center text-sm ${
                                        activeRoleTab === role.id 
                                            ? 'bg-[#00396a] text-white shadow-lg' 
                                            : 'bg-gray-100 text-[#00396a] hover:bg-gray-200'
                                    }`}
                                >
                                    {role.title}
                                </button>
                            ))}
                        </div>

                        {/* Анимированная карточка для мобилки */}
                        <motion.div
                            key={activeRole.id} // Изменение key заставляет анимацию проигрываться заново
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RoleCard 
                                title={activeRole.title} 
                                icon={activeRole.icon} 
                                points={activeRole.points} 
                            />
                        </motion.div>
                    </div>

                    {/* --- ДЕСКТОПНАЯ ВЕРСИЯ (Сетка из 3 карточек) --- */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {rolesData.map((role) => (
                            <RoleCard 
                                key={role.id}
                                title={role.title} 
                                icon={role.icon} 
                                points={role.points} 
                            />
                        ))}
                    </div>
                </>
            );
        })()}
      </section>

     {/* Lead Form */}
      {/* --- UNIFIED LEAD FORM --- */}
            <section className="max-w-2xl mx-auto px-4 mb-5">
                <div className="bg-[#c0dcf7] py-8 px-6 md:px-10 rounded-[32px] relative overflow-hidden shadow-xl">
                    {/* Декоративный элемент */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/40 rounded-full pointer-events-none blur-3xl"></div>
                    
                    <div className="relative z-10"> 
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00396a] mb-2">Готовы начать?</h2>
                            <p className="text-[#00396a] text-sm md:text-base">Оставьте заявку для получения доступа</p>
                        </div>
                        
                        <form onSubmit={handleFormSubmit} className="w-full space-y-4">
                            {/* Имя */}
                            <input 
                                name="name" 
                                required 
                                type="text" 
                                className="w-full px-5 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00396a]/50 focus:bg-white transition-all text-sm" 
                                placeholder="Ваше Имя" 
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    name="phone" 
                                    required 
                                    type="tel" 
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00396a]/50 focus:bg-white transition-all text-sm" 
                                    placeholder="+7 (___) ___-__-__" 
                                />
                                <input 
                                    name="email" 
                                    required 
                                    type="email" 
                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00396a]/50 focus:bg-white transition-all text-sm" 
                                    placeholder="Email" 
                                />
                            </div>

                            {/* Комментарий */}
                            <div className="relative">
                                <textarea 
                                    name="comment"
                                    maxLength={100}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00396a]/50 focus:bg-white transition-all resize-none h-24 text-sm"
                                    placeholder="Ваш комментарий (опционально)"
                                ></textarea>
                                <div className={`absolute bottom-2 right-3 text-[10px] font-medium ${comment.length >= 100 ? 'text-red-500' : 'text-gray-400'}`}>
                                    {comment.length} / 100
                                </div>
                            </div>

                            {/* Turnstile */}
                            <div className="flex justify-center scale-90 origin-center py-1">
                                <div className="cf-turnstile" data-sitekey="YOUR_SITE_KEY_HERE"></div>
                            </div>

                            {/* Блок чекбоксов */}
                            <div className="space-y-2 px-1">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input 
                                        name="privacy"
                                        type="checkbox" 
                                        required 
                                        className=" w-4 h-4 text-[#00396a] bg-white border-transparent rounded cursor-pointer" 
                                    />
                                    <span className="text-[12px] text-[#00396a] leading-tight">
                                        Я согласен на обработку персональных данных
                                    </span>
                                </label>

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input 
                                        name="subscribe"
                                        type="checkbox" 
                                        className=" w-4 h-4 text-[#00396a] bg-white border-transparent rounded cursor-pointer" 
                                    />
                                    <span className="text-[12px] text-[#00396a] leading-tight">
                                        Я согласен получать рассылку о скидках и новых функциях
                                    </span>
                                </label>
                            </div>

                            {/* Кнопка отправки */}
                            <div className="flex justify-center pt-2">
                                <Button 
                                    type="submit"
                                    variant="custom" 
                                    className="w-full md:w-auto py-3 px-10 rounded-full font-bold transition-all duration-300 bg-white text-[#00396a] hover:shadow-lg active:scale-95"
                                >
                                    Получить доступ
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* --- UNIFIED MODAL SUCCESS --- */}
            {isSuccess && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 backdrop-blur-md bg-[#00396a]/10">
                    <div className="bg-white rounded-[40px] p-8 max-w-sm w-full text-center shadow-2xl border-2 border-gray-100 animate-in zoom-in duration-300">
                        {/* Контейнер иконки с mx-auto для идеального центрирования */}
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                                <SquareCheckBig size={48} className="text-[#00396a]" />
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-extrabold text-[#00396a] mb-2">Заявка отправлена!</h3>
                        <p className="text-gray-500 text-sm mb-6">Менеджер уже проверяет данные. Мы свяжемся с Вами в ближайшее время.</p>
                        
                        <Button 
                            variant="custom" 
                            onClick={() => setIsSuccess(false)} 
                            className="w-full py-4 rounded-full font-bold bg-[#00396a] text-white hover:bg-[#002a4d] transition-all"
                        >
                            Отлично
                        </Button>
                    </div>
                </div>
            )}
    </div>
  );
};

const RoleCard = ({ title, icon: Icon, points }) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Немного уменьшили отступ под иконкой: mb-6 -> mb-5 */}
        <div className="mb-5 bg-blue-50 w-14 h-14 rounded-2xl border border-[#00396a]/40 flex items-center justify-center text-primary">
            <Icon size={28} />
        </div>
        
        <h3 className="text-2xl text-[#00396a] lg:text-3xl font-bold mb-4 leading-tight">{title}</h3>
        
        {/* Уменьшили расстояние между галочками (space-y-4 -> space-y-3) 
            и отступ перед кнопкой (mb-8 -> mb-6) */}
        <ul className="space-y-3 mb-6 flex-grow">
            {points.map((p, i) => (
                // Текст строго text-lg, как ты и просил
                <li key={i} className="flex items-start gap-3 text-lg text-[#00396a]">
                    <SquareCheckBig className="text-[#00396a] shrink-0 mt-1" size={20} />
                    <span className="leading-tight">{p}</span>
                </li>
            ))}
        </ul>
        
        {/* Кнопка осталась без изменений */}
        <Button to="/login" variant="custom" className="bg-[#00396a] text-white hover:shadow-lg w-full justify-center">
            Начать сейчас
        </Button>
        
    </div>
);

export default Home;