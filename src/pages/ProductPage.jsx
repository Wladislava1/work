import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

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

const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Lead Form Data:", Object.fromEntries(formData));
    alert("Заявка успешно отправлена (Check Console)");
};

const productsData = {
    'sb-arbitr': {
        title: 'СБ Арбитр',
        slogan: 'Сравнивайте, выбирайте, оформляйте',
        desc: 'Страхование ответственности арбитражных управляющих. Получите расчет стоимости по всем страховым компаниям, аккредитованным при Вашей СРО.',
        heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=SB+Hero',
        siteUrl: 'https://сбарбитр.рф/',
        howItWorks: 'Заполните одну заявку и получите расчет стоимости сразу по всем страховым компаниям. Стоимость договора такая же, как в страховой компании.',
        carouselImages: [sbSlide1, sbSlide2],
        features: [
            { title: "Индивидуально", text: "Персональный менеджер поможет в оформлении." },
            { title: "Удобно", text: "Расчет стоимости за 3-4 рабочих дня." },
            { title: "Выгодно", text: "Мы подберем наиболее выгодный вариант." },
            { title: "Прозрачно", text: "Без наценок. Стоимость как в страховой." }
        ]
    },
    'ai-referent': {
        title: 'AI Referent',
        slogan: 'Вы видите цифры. AI Referent находит риски.',
        desc: 'Анализ движения денежных средств, подозрительных сделок и контрагентов.',
        heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=AI+Hero',
        siteUrl: 'https://ai-referent.ru',
        howItWorks: 'Загрузите банковские выписки. Сервис автоматически структурирует данные, выявит риски и сформирует отчетность.',
        carouselImages: [aiSlide1, aiSlide2, aiSlide3],
        features: [
            { title: "Экономия времени", text: "Автоматический анализ и отчеты за минуту." },
            { title: "«Умный» анализ", text: "Быстрое выявление подозрительных сделок." },
            { title: "Минимизация ошибок", text: "На 99,9% меньше ошибок без ручной обработки." },
            { title: "Безопасность", text: "Защита данных по ISO 27001." }
        ]
    },
    'au-publicator': {
        title: 'АУ-Публикатор',
        slogan: 'Не мучайтесь с публикациями АУ-Публикуйте!',
        desc: 'Первый бесплатный сервис для автоматизированной публикации сообщений в «Коммерсантъ».',
        heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Publicator+Hero',
        siteUrl: 'https://au-publicator.ru',
        howItWorks: 'Создайте заявку всего за 7 шагов: от выбора типа публикации до проверки сгенерированного текста.',
        carouselImages: [auSlide1, auSlide2, auSlide3, auSlide4, auSlide5, auSlide6],
        features: [
            { title: "Бесплатно", text: "Оплачивайте только размещение в «Ъ»." },
            { title: "Автозаполнение", text: "Введите ИНН — остальное загрузится само." },
            { title: "Юридически верно", text: "Минимизация рисков ошибок." },
            { title: "Бонусы", text: "Баллы за публикации для других сервисов." }
        ]
    }
};

const ProductPage = () => {
    const { productId } = useParams();
    const data = productsData[productId];
    const [aboutTab, setAboutTab] = React.useState('insurance'); // 'insurance' | 'sro'

    const aboutData = {
        insurance: {
            title: "8 лет успешного сотрудничества с ведущими страховыми компаниями",
            subtitle: "Мы помогаем 30+ СРО взаимодействовать со страховыми компаниями, не увеличивая стоимость договора страхования.",
            list: [
                "ТИТ",
                "Британский Страховой Дом",
                "Международная страховая группа",
                "Аскор",
                "НКО ПОВС «СПЕКТР»",
                "ОВС «Сириус»"
            ]
        },
        sro: {
            title: "Работаем с крупнейшими СРО арбитражных управляющих",
            subtitle: "Нам доверяют ведущие ассоциации и союзы по всей России.",
            list: [
                "САМРО «Ассоциация антикризисных управляющих»",
                "Ассоциация СОАУ «Меркурий»",
                "Ассоциация СРО ОАУ «Лидер»",
                "Союз АУ «Возрождение»",
                "Союз АУ «Созидание»",
                "ААУ «Арсенал»",
                "ААУ «ЦФОП АПК»",
                "ПАУ ЦФО",
                "ААУ «СИРИУС»"
            ]
        }
    };

    if (!data) return <Navigate to="/" />;

    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 mb-20 pt-10">
                {/* Текстовый блок по центру (как на Главной) */}
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <span className="text-4xl md:text-6xl font-extrabold uppercase mb-4 block">
                        {data.title}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#00396a]">
                        {data.slogan}
                    </h1>
                    <p className="text-2xl text-neutral mb-10 max-w-3xl mx-auto">
                        {data.desc}
                    </p>
                    
                    {/* Кнопки по центру */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            variant="custom" 
                            className="bg-[#00396a] text-white hover:shadow-lg px-8 py-4 text-lg" 
                            href={data.siteUrl}
                            target="_blank"
                        >
                            Попробовать сейчас
                        </Button>
                        <Button 
                            variant="custom" 
                            className="bg-white text-[#00396a] shadow-md hover:shadow-lg px-8 py-4 text-lg" 
                            onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth'})}
                        >
                            Как это работает
                        </Button>
                    </div>
                </div>
            </section>
            {/* Блок "О нас" (Только для СБ Арбитр) */}
            {productId === 'sb-arbitr' && (
                <section className="max-w-7xl mx-auto px-4 mb-20">
                    <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            
                            {/* Левая колонка: Контент */}
                            <div className="p-8 md:p-12 flex flex-col h-full">
                                {/* Табы переключения */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <button
                                        onClick={() => setAboutTab('insurance')}
                                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                                            aboutTab === 'insurance' 
                                            ? 'bg-[#00396a] text-white shadow-md' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        Страховые компании
                                    </button>
                                    <button
                                        onClick={() => setAboutTab('sro')}
                                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                                            aboutTab === 'sro' 
                                            ? 'bg-[#00396a] text-white shadow-md' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        СРО
                                    </button>
                                </div>

                                {/* Заголовки (меняются динамически или остаются статичными - здесь динамика для точности) */}
                                <div className="mb-6">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#00396a] mb-4 leading-tight">
                                        {aboutData[aboutTab].title}
                                    </h2>
                                    <p className="text-lg text-neutral">
                                        {aboutData[aboutTab].subtitle}
                                    </p>
                                </div>

                                {/* Список с фиксированной высотой и скроллом */}
                                <div className="flex-grow">
                                    <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {aboutData[aboutTab].list.map((item, idx) => (
                                                <div 
                                                    key={idx}
                                                    className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow"
                                                >
                                                    {/* Иконка галочки */}
                                                    <div className="w-6 h-6 rounded-full bg-[#c0dcf7] flex items-center justify-center shrink-0">
                                                        <CheckCircle size={14} className="text-[#00396a]" />
                                                    </div>
                                                    <span className="text-sm font-bold text-[#00396a] leading-snug">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Правая колонка: Изображение */}
                            <div className="bg-gray-100 relative min-h-[400px] lg:min-h-full">
                                <img 
                                    src={sbSlide1} 
                                    alt="Интерфейс СБ Арбитр" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Градиент поверх картинки для лучшего слияния (опционально) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-l"></div>
                            </div>

                        </div>
                    </div>
                </section>
            )}
            {/* How it works */}
            <section id="how" className="bg-[#1976d2] py-20 rounded-[40px] shadow-sm mx-4 mb-20">
                <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white mb-12">Как это работает?</h2>
                    <p className="text-2xl text-neutral mb-10 max-w-3xl text-white mx-auto">{data.howItWorks}</p>
                </div>
                <ImageCarousel 
                    images={data.carouselImages} 
                    fit="contain"
                    />
                <div className="text-center mt-8">
                     <Button variant="custom" className="bg-white text-[#00396a] shadow-md hover:shadow-lg px-16 py-4 text-lg"  href="https://id.sspb.ru">Начать работу</Button>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#00396a] mb-12">Ключевые возможности</h2>
                
                {/* Grid на 4 колонки с увеличенными отступами (gap-8) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.features.map((feat, i) => (
                        <div 
                            key={i} 
                            // Увеличил внутренние отступы (p-8) и скругление (rounded-[32px])
                            // h-full растягивает карточки на одинаковую высоту
                            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                        >
                            {/* Заголовок крупнее (text-2xl) и с большим отступом снизу (mb-4) */}
                            <h3 className="text-2xl font-bold mb-4 text-[#00396a]">
                                {feat.title}
                            </h3>
                            
                            {/* Текст описания крупнее (text-lg) и с увеличенным межстрочным интервалом */}
                            <p className="text-xl text-[#00396a] mb-2lex-grow">
                                {feat.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl bg-[#1976d2] py-20 mx-auto rounded-[40px] relative overflow-hidden shadow-xl">
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

export default ProductPage;