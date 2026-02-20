import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import { Shield, BarChart, FileText, SquareCheckBig, MoreHorizontal, Users, Briefcase, Award, ArrowRight, CheckCircle } from 'lucide-react';// Добавил ArrowRight


// Импорты изображений
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

const ProductPageDesktop = () => {
    const { productId } = useParams();
    const [aboutTab, setAboutTab] = React.useState('insurance');
    const [comment, setComment] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [isSuccess, setIsSuccess] = React.useState(false);

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
  
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // только цифры
    if (value.startsWith('7') || value.startsWith('8')) value = value.substring(1);
    if (value.length > 10) value = value.substring(0, 10);
    
    let formatted = '+7 ';
    if (value.length > 0) formatted += '(' + value.substring(0, 3);
    if (value.length > 3) formatted += ') ' + value.substring(3, 6);
    if (value.length > 6) formatted += '-' + value.substring(6, 8);
    if (value.length > 8) formatted += '-' + value.substring(8, 10);
    
    setPhone(formatted);
  };

    // ДУБЛИРОВАНИЕ ДАННЫХ (DESKTOP)
    const productsData = {
        'sb-arbitr': {
            title: 'СБ Арбитр',
            slogan: 'Сравнивайте, выбирайте, оформляйте',
            desc: 'Страхование ответственности арбитражных управляющих\nи организация банковского обслуживания.\nПолучите расчет стоимости по всем страховым компаниям,\nаккредитованным при вашем СРО.',
            heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=SB+Hero',
            siteUrl: 'https://сбарбитр.рф/',
            siteUrlSSPBID: 'https://passport.sspb.ru/',
            nameButton: "Начать работу",
            nameButtonHeader: "Получить расчет",
            howItWorks: 'Заполните одну заявку и получите расчет стоимости сразу по всем страховым компаниям. Стоимость договора такая же, как в страховой компании.',
            carouselImages: [sbSlide2, sbSlide1],
            theme: {
                gradient: "bg-gradient-to-r from-[#0d3b3b] to-[#28b8b8]",
                colorButton: "bg-[#215e5e]",
                textShadow: "shadow-[#215e5e]/20"
            },
            features: [
                { title: "Индивидуально", text: "Персональный менеджер поможет \nв оформлении необходимых документов \nв кратчайшие сроки." },
                { title: "Быстро", text: "Вы получите расчет стоимости договора страхования сразу \nпо всем СК, аккредитованным \nпри Вашем СРО." },
                { title: "Выгодно", text: "Мы подберем наиболее подходящий для Вас вариант." },
                { title: "Без переплат", text: "Стоимость договора страхования такая же, как в страховой компании." }
            ],
        },
        'ai-referent': {
            title: 'AI Referent',
            slogan: 'Вы видите цифры, сервис находит риски',
            desc: 'Анализ банковских выписок: движения денежных средств,\nподозрительных сделок и контрагентов должника.',
            heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=AI+Hero',
            siteUrl: 'https://ai-referent.ru',
            siteUrlSSPBID: 'https://passport.sspb.ru/',
            nameButton: "Загрузить выписки",
            nameButtonHeader: "Проанализировать",
            howItWorks: 'Загрузите банковские выписки предприятия и получите персонализированный дашборд \nс информацией по каждому платежу. Сервис автоматически выявит риски \nи сформирует отчетность.',
            carouselImages: [aiSlide1, aiSlide2, aiSlide3],
            theme: {
                gradient: "bg-gradient-to-r from-[#31054a] via-[#611885] to-[#e0aaff]",
                colorButton: "bg-[#52097d]",
                textShadow: "shadow-[#611885]/20"
            },
            features: [
                { title: "Экономия времени", text: "Быстрое выявление подозрительных сделок, автоматический анализ и отчеты." },
                { title: "Универсальность", text: "Обработка разных форматов документов (выгрузки из 1C, Excel, Word и PDF, включая сканы)." },
                { title: "Минимизация ошибок", text: "Меньше ошибок благодаря отказу\nот “ручной” обработки документов." },
                { title: "Безопасность данных", text: "Обработка данных на собственных серверах, защищённых по ISO 27001, исключает возможность «утечек»." },
            ]
        },
        'au-publicator': {
            title: 'АУ-Публикатор',
            slogan: 'Не мучайтесь с публикациями в “Ъ”',
            desc: 'Первый бесплатный сервис для автоматизированной публикации\nюридически корректных сообщений в “КоммерсантЪ” за считанные минуты.',
            heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Publicator+Hero',
            siteUrl: 'https://au-publicator.ru',
            siteUrlSSPBID: 'https://passport.sspb.ru/',
            nameButton: "Начать работу",
            nameButtonHeader: "Создать публикацию",
            howItWorks: 'Создайте заявку всего за 7 шагов: от выбора типа публикации до проверки сгенерированного текста.',
            carouselImages: [auSlide1, auSlide2, auSlide3, auSlide4, auSlide5, auSlide6],
            theme: {
                gradient: "bg-gradient-to-r from-[#cc0011] to-[#1a00ff]",
                colorButton: "bg-[#AF3552]",
                textShadow: "shadow-[#1A00FF]/20"
            },
            features: [
                { title: "Экономия времени", text: "Создайте заявку на публикацию всего за 7 шагов." },
                { title: "Автоматизация", text: "Введите ИНН должника, АУ \nи судебный акт \nо его назначении, остальные данные загрузятся автоматически." },
                { title: "Минимизация рисков", text: "Сервис генерирует юридически корректный текст, исключая несоответствия требованиям действующего законодательства." },
                { title: "Бесплатный сервис", text: "Оплачивайте только размещение публикаций в “Ъ”." }
            ]
        }
    };

    const aboutData = {
        insurance: {
            title: "8 лет успешного сотрудничества с ведущими страховыми компаниями",
            subtitle: "Мы помогаем СРО взаимодействовать со страховыми компаниями, не увеличивая стоимость договора страхования.",
            list: [
                "ТИТ", "Британский Страховой Дом", "Международная страховая группа", "Аскор", "НКО ПОВС «СПЕКТР»", "ОВС «Сириус»"
            ]
        },
        sro: {
            title: "Работаем с крупнейшими СРО арбитражных управляющих",
            subtitle: "Нам доверяют ведущие ассоциации и союзы по всей России.",
            list: [
                "САУ «СРО «ДЕЛО»", "ААУ «Сириус»", "Ассоциация «МСОПАУ»",
                "Союз «СРО АУ «Стратегия»", "Ассоциация СРО «Эгида»", "Союз АУ «НЦРБ»", "Ассоциация ВАУ «Достояние»", "НПС СОПАУ «Альянс управляющих»", "И другие"
            ]
        }
    };

    const data = productsData[productId];
    if (!data) return <Navigate to="/" />;

    return (
        <div className="pt-24">
            {/* Hero Section (Desktop) */}
            <section className="max-w-7xl mx-auto px-4 mb-5 pt-5">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <span className={`text-4xl md:text-5xl font-black mb-4 block text-[#00396a]`}>
                        {data.title}
                    </span>
                    <h1 className={`text-4xl font-extrabold mb-6 leading-tight text-[#00396a]`}>{data.slogan}</h1>
                    <p className={`text-2xl text-neutral mb-10 max-w-5xl mx-auto text-[#00396a] whitespace-pre-line`}>{data.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="custom" className={`bg-[#00396a] text-white hover:shadow-lg px-8 py-4 text-lg`} href={data.siteUrlSSPBID} target="_blank">{data.nameButtonHeader}</Button>
                        <Button variant="custom" className="bg-white text-[#00396a] shadow-md hover:shadow-lg px-8 py-4 text-lg" onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })}>Как это работает</Button>
                    </div>
                </div>
                            {/* Features (Grid 4) */}
<section className="max-w-7xl mx-auto px-4 mb-20">
    <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#00396a] mb-12">Ключевые возможности</h2>
    
    {/* Сетка теперь всегда 4 колонки для всех продуктов */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.features.map((feat, i) => (
            <div 
                key={i} 
                className="bg-[#c0dcf7] p-8 rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
                <h3 className="text-2xl font-bold mb-4 text-[#00396a] whitespace-pre-line">{feat.title}</h3>
                <p className="text-xl text-[#00396a] mb-2 flex-grow whitespace-pre-line">{feat.text}</p>
            </div>
        ))}
    </div>
</section>
            </section>
            {productId === 'sb-arbitr' && (
                <section className="max-w-7xl mx-auto px-4 mb-20">
                    <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden py-12 px-8 md:px-12">
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            
                            {/* 1. ЛЕВАЯ КОЛОНКА: Табы + Заголовок + Описание */}
                            <div className="flex flex-col items-start text-left">
                                
                                {/* Табы */}
                                <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1 mb-8">
                                    <button 
                                        onClick={() => setAboutTab('insurance')} 
                                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${aboutTab === 'insurance' ? 'bg-[#00396a] text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        Страховые компании
                                    </button>
                                    <button 
                                        onClick={() => setAboutTab('sro')} 
                                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${aboutTab === 'sro' ? 'bg-[#00396a] text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        СРО
                                    </button>
                                </div>

                                {/* Заголовок */}
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#00396a] mb-6 leading-tight">
                                    8 лет успешного сотрудничества <br />
                                    с ведущими страховыми компаниями и СРО
                                </h2>
                                
                                {/* Подзаголовок */}
                                <p className="text-xl text-neutral leading-relaxed max-w-lg">
                                    Мы помогаем СРО взаимодействовать со страховыми компаниями,{' '}
                                    <span className="font-bold">не увеличивая стоимость договора страхования.</span>
                                </p>
                            </div>

                            {/* 2. ПРАВАЯ КОЛОНКА: Полный список (БЕЗ скролла, на всю высоту) */}
                            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-inner flex flex-col h-[400px]">
                                
                                {/* Заголовок списка (shrink-0 чтобы заголовок не сжимался при скролле) */}
                                <h3 className="text-xl font-bold text-[#00396a] mb-6 px-2 border-b border-gray-100 pb-4 shrink-0">
                                    {aboutTab === 'insurance' ? 'Страховые компании — партнёры' : 'СРО — партнёры'}
                                </h3>

                                {/* Контейнер для скролла */}
                                <div className="overflow-y-auto custom-scrollbar pr-2 flex-grow">
                                    {/* Список элементов (Грид на 2 колонки) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {aboutData[aboutTab].list.map((item, idx) => {
                                            // Проверяем, это обычный пункт или "И другие"
                                            const isOthers = item === "И другие";
                                            // Выбираем иконку динамически
                                            const IconComponent = isOthers ? MoreHorizontal : SquareCheckBig;

                                            return (
                                                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 hover:shadow-md transition-all hover:bg-blue-50 group">
                                                    <div className="w-8 h-8 rounded-full bg-[#c0dcf7] group-hover:bg-[#00396a] transition-colors flex items-center justify-center shrink-0">
                                                        <IconComponent size={16} className="text-[#00396a] group-hover:text-white transition-colors" />
                                                    </div>
                                                    <span className="text-sm font-bold text-[#00396a] leading-snug">{item}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            )}
            
            {/* How it works */}
            <section id="how" className="bg-[#1976d2] py-8 rounded-[40px] shadow-sm mx-4 mb-20">
                <div className="max-w-7xl mx-auto px-4 text-center mb-5">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white mb-4">Как это работает?</h2>
                    <p className="text-2xl text-neutral max-w-5xl text-white mx-auto whitespace-pre-line">{data.howItWorks}</p>
                </div>
                <ImageCarousel images={data.carouselImages} fit="contain" variant="product"/>
                <div className="text-center mt-8">
                    <Button variant="custom" className="bg-white text-[#00396a] shadow-md hover:shadow-lg px-16 py-4 text-lg" href={data.siteUrlSSPBID}>{data.nameButton}</Button>
                </div>
            </section>



            {/* Form (Horizontal Grid) */}
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

export default ProductPageDesktop;