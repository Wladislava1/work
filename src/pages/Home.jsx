/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Добавил Link для работы кнопок
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import { Shield, BarChart, FileText, CheckCircle, Users, Briefcase, Award, ArrowRight } from 'lucide-react'; // Добавил ArrowRight
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

  const tabsData = {
    'sb-arbitr': {
      title: "Страховой брокер для арбитражных управляющих",
      features: ["Бесплатное использование сервиса", "Расчет стоимости по всем СК в одном месте"],
      link: "/sb-arbitr",
      images: [sbSlide1, sbSlide2]
    },
    'ai-referent': {
      title: "Анализ движения денежных средств и рисков",
      features: ["Формирование отчетов за минуту", "Обработка больших массивов данных"],
      link: "/ai-referent",
      images: [aiSlide1, aiSlide2, aiSlide3]
    },
    'au-publicator': {
      title: "Публикации в «Коммерсантъ» за минуты",
      features: ["Бесплатное пользование сервисом", "Создание публикации за 7 шагов"],
      link: "/au-publicator",
      images: [auSlide1, auSlide2, auSlide3, auSlide4, auSlide5, auSlide6]
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Lead Form Data:", Object.fromEntries(formData));
    alert("Заявка успешно отправлена (Check Console)");
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Единая платформа для <span className="text-primary">банкротства</span>
          </motion.h1>
          <p className="text-2xl mb-8">
            Страхование, анализ сделок, публикации в «Ъ» и управление процедурами — все в одной экосистеме с единым входом.
          </p>
        </div>

        {/* Hero Cards (UPDATED) */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "СБ Арбитр", desc: "Страхование ответственности АУ", icon: Shield, link: "/sb-arbitr" },
            { title: "AI Referent", desc: "Анализ банковских выписок и рисков", icon: BarChart, link: "/ai-referent" },
            { title: "АУ Публикатор", desc: "Автоматическая генерация сообщений в «Ъ»", icon: FileText, link: "/au-publicator" },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-[#1976d2] to-[#00396a] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full text-white"
            >
              {/* Иконка в белом круге с прозрачностью */}
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <card.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
              <p className="text-xl text-white mb-8 flex-grow">{card.desc}</p>
              
              {/* Кнопка "Подробнее о продукте" */}
              <Link 
                to={card.link}
                className="group flex items-center justify-between w-full py-1 pl-6 pr-1 rounded-full border border-white text-white text-md font-medium transition-all duration-300 hover:bg-white hover:text-[#00396a] hover:border-white hover:shadow-lg"
              >
                <span>Подробнее о продукте</span>
                {/* Круглая иконка стрелки внутри кнопки */}
                <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#00396a]/50 group-hover:text-white">
                    <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="bg-[#1976d2] py-20 rounded-[40px] mb-20 shadow-sm mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white mb-12">Экосистема продуктов</h2>
          
          <div className="flex justify-center mb-12 flex-wrap gap-2">
            {Object.keys(tabsData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === key ? 'bg-[#00396a] text-white shadow-lg' : 'bg-gray-100 text-neutral hover:bg-gray-200'
                }`}
              >
                {key === 'sb-arbitr' ? 'СБ Арбитр' : key === 'ai-referent' ? 'AI Referent' : 'АУ Публикатор'}
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
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#00396a] shrink-0 mt-1" size={20} />
                    <span className="text-xl text-[#00396a] text-lg text-[#00396a]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
               <Link 
                className="ggroup flex items-center justify-center w-full py-4 px-6 rounded-full text-semibold font-medium transition-all duration-300 bg-white text-[#00396a] hover:shadow-xl"
              >
                <span>Изучить продукт</span>
                {/* Круглая иконка стрелки внутри кнопки */}
              </Link>
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
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#00396a] mb-12">Решения для каждой роли</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <RoleCard 
                title="Арбитражным управляющим" 
                icon={Users}
                points={["Полный контроль процедур", "Страхование через единый интерфейс", "Автоматизация публикаций"]} 
            />
            <RoleCard 
                title="Юристам" 
                icon={Briefcase}
                points={["Контроль и принятие решений", "Отслеживание публикаций", "Аудит действий"]} 
            />
            <RoleCard 
                title="Командам сопровождения" 
                icon={Award}
                points={["Управление командой", "Выявление аномалий по сделкам", "Генерация отчетов"]} 
            />
        </div>
      </section>

     {/* Lead Form */}
<section className="max-w-7xl bg-[#1976d2] py-20 mx-auto rounded-[40px] relative overflow-hidden shadow-xl">
  {/* Декоративный круг на фоне */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none blur-3xl"></div>
  
  <div className="max-w-4xl mx-auto px-4 relative z-10"> {/* 👈 max-w-4xl и mx-auto */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Готовы начать?</h2>
      <p className="text-blue-100 text-lg">Оставьте заявку, и мы свяжемся с Вами для предоставления доступа</p>
    </div>
    
    <form onSubmit={handleFormSubmit} className="w-full">
      {/* Грид на 4 колонки: Имя, Телефон, Email, Кнопка */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input 
          name="name" 
          required 
          type="text" 
          className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-md" 
          placeholder="Ваше Имя" 
        />
        <input 
          name="phone" 
          required 
          type="tel" 
          className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-md" 
          placeholder="Телефон" 
        />
        <input 
          name="email" 
          required 
          type="email" 
          className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-md" 
          placeholder="Email" 
        />
        
        {/* Кнопка: темно-синяя для контраста с голубым фоном */}
        <Button type="submit" className="w-full bg-[#00396a] text-[#00396a] hover:text-white hover:bg-[#002a4d] transition-all duration-300">
          Получить доступ
        </Button>
      </div>

      {/* Чекбокс снизу по центру */}
      <div className="flex justify-center items-center gap-3">
        <div className="relative flex items-start">
          <input 
            id="privacy" 
            type="checkbox" 
            required 
            className="mt-1 w-5 h-5 text-[#00396a] bg-white border-transparent rounded focus:ring-white focus:ring-offset-0 cursor-pointer" 
          />
        </div>
        <label htmlFor="privacy" className="text-sm text-blue-100 cursor-pointer hover:text-white transition-colors">
          Я согласен на обработку персональных данных
        </label>
      </div>
    </form>
  </div>
</section>
    </div>
  );
};

const RoleCard = ({ title, icon: Icon, points }) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col h-full  shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
        <div className="mb-6 bg-blue-50 w-14 h-14 rounded-2xl border border-[#00396a]/40 flex items-center justify-center text-primary">
            <Icon size={28} />
        </div>
        <h3 className="text-2xl text-[#00396a] md:text-3xl font-bold mb-6 leading-tight">{title}</h3>
        <ul className="space-y-3 mb-8 flex-grow">
            {points.map((p, i) => (
                <li key={i} className="text-xl text-[#00396a] mb-2lex-grow">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                    {p}
                </li>
            ))}
        </ul>
        <Button to="https://id.sspb.ru" variant="custom" className="bg-[#00396a] text-white hover:shadow-lg">Начать сейчас</Button>
    </div>
);

export default Home;