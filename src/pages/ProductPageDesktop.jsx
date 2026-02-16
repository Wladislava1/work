import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import { Shield, BarChart, FileText, SquareCheckBig, Users, Briefcase, Award, ArrowRight } from 'lucide-react';// Добавил ArrowRight
import { CheckCircle } from 'lucide-react';

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log("Lead Form Data:", Object.fromEntries(formData));
        alert("Заявка успешно отправлена (Check Console)");
    };

    // ДУБЛИРОВАНИЕ ДАННЫХ (DESKTOP)
    const productsData = {
        'sb-arbitr': {
            title: 'СБ Арбитр',
            slogan: 'Сравнивайте, выбирайте, оформляйте',
            desc: 'Страхование ответственности арбитражных управляющих. \nПолучите расчет стоимости по всем страховым компаниям, аккредитованным \nпри Вашей СРО.',
            heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=SB+Hero',
            siteUrl: 'https://сбарбитр.рф/',
            nameButton: "Начать работу",
            nameButtonHeader: "Получить расчет",
            howItWorks: 'Заполните одну заявку и получите расчет стоимости сразу по всем страховым компаниям. Стоимость договора такая же, как в страховой компании.',
            carouselImages: [sbSlide2, sbSlide1],
            features: [
                { title: "Индивидуально", text: "Персональный менеджер поможет \nв оформлении необходимых документов \nв кратчайшие сроки." },
                { title: "Быстро", text: "Вы получите расчет стоимости договора страхования сразу \nпо всем СК, аккредитованным \nпри Вашем СРО." },
                { title: "Выгодно", text: "Мы подберем наиболее подходящий для Вас вариант." },
                { title: "Без переплат", text: "Стоимость договора страхования такая же, как в страховой компании." }
            ]
        },
        'ai-referent': {
            title: 'AI Referent',
            slogan: 'Вы видите цифры, сервис находит риски',
            desc: 'Анализ движения денежных средств, подозрительных \nсделок и контрагентов.',
            heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=AI+Hero',
            siteUrl: 'https://ai-referent.ru',
            nameButton: "Загрузить выписки",
            nameButtonHeader: "Проанализировать",
            howItWorks: 'Загрузите банковские выписки предприятия и получите персонализированный дашборд \nс информацией по каждому платежу. Сервис автоматически выявит риски \nи сформирует отчетность.',
            carouselImages: [aiSlide1, aiSlide2, aiSlide3],
            features: [
                { title: "Экономия времени", text: "Автоматический анализ и отчеты за минуту." },
                { title: "«Умный» анализ", text: " Быстрое выявление подозрительных сделок и рисков доначисления налогов." },
                { title: "Минимизация ошибок", text: "Меньше ошибок благодаря отказу от “ручной” обработки документов." },
                { title: "Безопасность данных", text: "Обработка данных на собственных серверах, защищённых по ISO 27001, исключает возможность «утечек»." }
            ]
        },
        'au-publicator': {
            title: 'АУ-Публикатор',
            slogan: 'Не мучайтесь с публикациями в “Ъ”',
            desc: 'Первый бесплатный сервис для автоматизированной публикации сообщений в “КоммерсантЪ” за считанные минуты.',
            heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Publicator+Hero',
            siteUrl: 'https://au-publicator.ru',
            nameButton: "Начать работу",
            nameButtonHeader: "Создать публикацию",
            howItWorks: 'Создайте заявку всего за 7 шагов: от выбора типа публикации до проверки сгенерированного текста.',
            carouselImages: [auSlide1, auSlide2, auSlide3, auSlide4, auSlide5, auSlide6],
            features: [
                { title: "Экономия времени", text: "Оплачивайте только размещение публикаций в «Ъ»." },
                { title: "Автоматизация", text: "Введите ИНН должника, АУ \nи судебный акт \nо его назначении, остальные данные загрузятся автоматически." },
                { title: "Минимизация рисков", text: "Минимизация рисков ошибок, исключая несоответствия требованиям действующего законодательства." },
                { title: "Выгодно", text: "За публикации начисляются баллы \nдля использования других сервисов \nв ССПБ." }
            ]
        }
    };

    const aboutData = {
        insurance: {
            title: "8 лет успешного сотрудничества с ведущими страховыми компаниями",
            subtitle: "Мы помогаем более 30 СРО взаимодействовать со страховыми компаниями, не увеличивая стоимость договора страхования.",
            list: [
                "ТИТ", "Британский Страховой Дом", "Международная страховая группа", "Аскор", "НКО ПОВС «СПЕКТР»", "ОВС «Сириус»"
            ]
        },
        sro: {
            title: "Работаем с крупнейшими СРО арбитражных управляющих",
            subtitle: "Нам доверяют ведущие ассоциации и союзы по всей России.",
            list: [
                "САМРО «Ассоциация антикризисных управляющих»", "Ассоциация СОАУ «Меркурий»", "Ассоциация СРО ОАУ «Лидер»",
                "Союз АУ «Возрождение»", "Союз АУ «Созидание»", "ААУ «Арсенал»", "ААУ «ЦФОП АПК»", "ПАУ ЦФО", "ААУ «СИРИУС»"
            ]
        }
    };

    const data = productsData[productId];
    if (!data) return <Navigate to="/" />;

    return (
        <div className="pt-24 pb-20">
            {/* Hero Section (Desktop) */}
            <section className="max-w-7xl mx-auto px-4 mb-20 pt-10">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <span className="text-4xl md:text-6xl font-extrabold mb-4 block">{data.title}</span>
                    <h1 className="text-4xl font-extrabold mb-6 leading-tight text-[#00396a]">{data.slogan}</h1>
                    <p className="text-2xl text-neutral mb-10 max-w-5xl mx-auto whitespace-pre-line">{data.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="custom" className="bg-[#00396a] text-white hover:shadow-lg px-8 py-4 text-lg" href={data.siteUrl} target="_blank">{data.nameButtonHeader}</Button>
                        <Button variant="custom" className="bg-white text-[#00396a] shadow-md hover:shadow-lg px-8 py-4 text-lg" onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })}>Как это работает</Button>
                    </div>
                </div>
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
                                <p className="text-lg text-neutral leading-relaxed max-w-lg">
                                    Мы помогаем 30+ СРО взаимодействовать со страховыми компаниями,{' '}
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
                                        {aboutData[aboutTab].list.map((item, idx) => (
                                            <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 hover:shadow-md transition-all hover:bg-blue-50 group">
                                                <div className="w-8 h-8 rounded-full bg-[#c0dcf7] group-hover:bg-[#00396a] transition-colors flex items-center justify-center shrink-0">
                                                    {/* Заменили на SquareCheckBig с сохранением стилей */}
                                                    <SquareCheckBig size={16} className="text-[#00396a] group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-sm font-bold text-[#00396a] leading-snug">{item}</span>
                                            </div>
                                        ))}
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
                    <Button variant="custom" className="bg-white text-[#00396a] shadow-md hover:shadow-lg px-16 py-4 text-lg" href={data.siteUrl}>{data.nameButton}</Button>
                </div>
            </section>

            {/* Features (Grid 4) */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#00396a] mb-12">Ключевые возможности</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.features.map((feat, i) => (
                        <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-4 text-[#00396a] whitespace-pre-line">{feat.title}</h3>
                            <p className="text-xl text-[#00396a] mb-2 flex-grow whitespace-pre-line">{feat.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form (Horizontal Grid) */}
            <section className="max-w-3xl bg-[#1976d2] py-10 mx-auto rounded-[40px] relative overflow-hidden shadow-xl">
  {/* Декоративный круг на фоне */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none blur-3xl"></div>
  
  {/* Сузил контейнер до max-w-2xl (было 4xl), чтобы вертикальная форма смотрелась собранно */}
  <div className="max-w-2xl mx-auto px-4 relative z-10"> 
    <div className="text-center mb-7">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Готовы начать?</h2>
      <p className="text-blue-100 text-lg">Оставьте заявку, и мы свяжемся с Вами для предоставления доступа</p>
    </div>
    
    <form onSubmit={handleFormSubmit} className="w-full">
      {/* Вертикальный стек полей (flex-col) вместо сетки */}
      <div className="flex flex-col gap-4 mb-8">
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
        
        {/* Кнопка: w-auto (по ширине текста + отступы), по центру (self-center) */}
        
      </div>

      {/* Блок чекбоксов */}
      <div className="flex flex-col items-start gap-3 pl-2"> {/* pl-2 для визуального выравнивания с закругленными полями */}
        
        {/* 1. Обязательная галочка: Обработка ПД */}
        <div className="flex items-start gap-3">
          <div className="relative flex items-start">
            <input 
              id="privacy" 
              name="privacy"
              type="checkbox" 
              required 
              className="w-5 h-5 text-[#00396a] bg-white rounded focus:ring-white focus:ring-offset-0 cursor-pointer" 
            />
          </div>
          <label htmlFor="privacy" className="text-md text-white cursor-pointer hover:text-white transition-colors text-left leading-tight">
            Я согласен на обработку персональных данных
          </label>
        </div>

        {/* 2. Необязательная галочка: Рассылка */}
        <div className="flex items-start gap-3">
          <div className="relative flex items-start">
            <input 
              id="subscribe" 
              name="subscribe"
              type="checkbox" 
              className="w-5 h-5 text-[#00396a] bg-white rounded focus:ring-white focus:ring-offset-0 cursor-pointer" 
            />
          </div>
          <label htmlFor="subscribe" className="text-md text-white cursor-pointer hover:text-white transition-colors text-left leading-tight">
            Я согласен получать рассылку о скидках и новых функциях
          </label>
        </div>
                
      </div>
      <div className="flex justify-center mt-8">
            <Button variant="custom" className="ggroup flex items-center justify-center max-w-auto py-4 px-30 rounded-full text-semibold font-medium transition-all duration-300 bg-white text-[#00396a] hover:shadow-xl">
            Получить доступ
        </Button>
        </div>
    </form>
  </div>
</section>
        </div>
    );
};

export default ProductPageDesktop;