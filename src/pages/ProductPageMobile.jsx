import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

// ТЕ ЖЕ ИМПОРТЫ (ДУБЛИРОВАНИЕ)
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

const ProductPageMobile = () => {
    const { productId } = useParams();
    const [aboutTab, setAboutTab] = React.useState('insurance');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log("Lead Form Data (Mobile):", Object.fromEntries(formData));
        alert("Заявка успешно отправлена");
    };

    // ДУБЛИРОВАНИЕ ДАННЫХ (MOBILE)
    const productsData = {
            'sb-arbitr': {
                title: 'СБ Арбитр',
                slogan: 'Сравнивайте, выбирайте, оформляйте',
                desc: 'Страхование ответственности арбитражных управляющих. \nПолучите расчет стоимости по всем страховым компаниям, аккредитованным при Вашей СРО.',
                heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=SB+Hero',
                siteUrl: 'https://сбарбитр.рф/',
                nameButton: "Начать работу",
                howItWorks: 'Заполните одну заявку и получите расчет стоимости сразу по всем страховым компаниям. Стоимость договора такая же, как в страховой компании.',
                carouselImages: [sbSlide1, sbSlide2],
                features: [
                    { title: "Индивидуально", text: "Персональный менеджер поможет в оформлении необходимых документов в кратчайшие сроки." },
                    { title: "Удобно", text: "Вы получите расчет стоимости договора страхования по всем СК, аккредитованным при Вашем СРО." },
                    { title: "Выгодно", text: "Мы подберем наиболее выгодный для Вас вариант." },
                    { title: "Прозрачно", text: "Стоимость договора страхования такая же, как в страховой компании." }
                ]
            },
            'ai-referent': {
                title: 'AI Referent',
                slogan: 'Вы видите цифры, сервис находит риски',
                desc: 'Анализ движения денежных средств, подозрительных \nсделок и контрагентов.',
                heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=AI+Hero',
                siteUrl: 'https://ai-referent.ru',
                nameButton: "Загрузить выписки",
                howItWorks: 'Загрузите банковские выписки предприятия и получите персонализированный дашборд \nс информацией по каждому платежу. Сервис автоматически выявит риски \nи сформирует отчетность.',
                carouselImages: [aiSlide1, aiSlide2, aiSlide3],
                features: [
                    { title: "Экономия времени", text: "Автоматический анализ и отчеты за минуту." },
                    { title: "«Умный» анализ", text: " Быстрое выявление подозрительных сделок и рисков доначисления налогов." },
                    { title: "Минимизация ошибок", text: "На 99,9% меньше ошибок без ручной обработки." },
                    { title: "Безопасность", text: "Обработка данных на собственных серверах, защищённых по ISO 27001, исключает возможность «утечек»." }
                ]
            },
            'au-publicator': {
                title: 'АУ-Публикатор',
                slogan: 'Не мучайтесь с публикациями АУ-Публикуйте!',
                desc: 'Первый бесплатный сервис для автоматизированной публикации сообщений в «Коммерсантъ».',
                heroImage: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Publicator+Hero',
                siteUrl: 'https://au-publicator.ru',
                nameButton: "Начать работу",
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

    const aboutData = {
        insurance: {
            title: "8 лет успешного сотрудничества",
            subtitle: "Мы помогаем 30+ СРО взаимодействовать со страховыми компаниями.",
            list: ["ТИТ", "Британский Страховой Дом", "Международная страховая группа", "Аскор", "НКО ПОВС «СПЕКТР»", "ОВС «Сириус»"]
        },
        sro: {
            title: "Работаем с крупнейшими СРО",
            subtitle: "Нам доверяют ведущие ассоциации и союзы по всей России.",
            list: ["САМРО «Ассоциация антикризисных управляющих»", "Ассоциация СОАУ «Меркурий»", "Ассоциация СРО ОАУ «Лидер»", "Союз АУ «Возрождение»", "Союз АУ «Созидание»", "ААУ «Арсенал»", "ААУ «ЦФОП АПК»", "ПАУ ЦФО", "ААУ «СИРИУС»"]
        }
    };

    const data = productsData[productId];
    if (!data) return <Navigate to="/" />;

    return (
        <div className="pt-24 pb-12 overflow-x-hidden">
            {/* Mobile Hero */}
            <section className="px-4 mb-16 pt-6">
                <div className="text-center mb-8">
                    <span className="text-primary font-extrabold text-4xl mb-2 block">{data.title}</span>
                    <h1 className="text-2xl font-extrabold mb-4 leading-tight text-[#00396a]">{data.slogan}</h1>
                    <p className="text-lg text-neutral mb-8">{data.desc}</p>
                    <div className="flex flex-col gap-3">
                        <Button variant="custom" className="bg-[#00396a] text-white w-full py-4 text-lg" href={data.siteUrl} target="_blank">Попробовать</Button>
                        <Button variant="custom" className="bg-white text-[#00396a] border-2 border-gray-100 w-full py-4 text-lg" onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })}>Как это работает</Button>
                    </div>
                </div>
            </section>

            {/* Mobile "О нас" (Только для СБ Арбитр) */}
            {/* Блок "О нас" (Только для СБ Арбитр - MOBILE) */}
{/* Блок "О нас" (Только для СБ Арбитр - MOBILE) */}
{productId === 'sb-arbitr' && (
    <section className="mx-4 mb-12">
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6">
            
            {/* 1. Табы (На всю ширину для удобства) */}
            <div className="mb-6">
                <div className="flex bg-gray-100 rounded-full p-1 w-full">
                    <button 
                        onClick={() => setAboutTab('insurance')} 
                        className={`flex-1 py-3 rounded-full text-xs font-bold transition-all text-center ${aboutTab === 'insurance' ? 'bg-[#00396a] text-white shadow-md' : 'text-gray-600'}`}
                    >
                        Страховые
                    </button>
                    <button 
                        onClick={() => setAboutTab('sro')} 
                        className={`flex-1 py-3 rounded-full text-xs font-bold transition-all text-center ${aboutTab === 'sro' ? 'bg-[#00396a] text-white shadow-md' : 'text-gray-600'}`}
                    >
                        СРО
                    </button>
                </div>
            </div>

            {/* 2. Заголовок и Текст (Выравнивание влево) */}
            <div className="text-left mb-8">
                <h2 className="text-2xl font-extrabold text-[#00396a] mb-4 leading-tight">
                    8 лет успешного сотрудничества <br />
                    с ведущими страховыми компаниями и СРО
                </h2>
                <p className="text-sm text-neutral leading-relaxed">
                    Мы помогаем 30+ СРО взаимодействовать со страховыми компаниями, не увеличивая стоимость договора страхования.
                </p>
            </div>

            {/* 3. Список (БЕЗ скролла, полный список) */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-inner flex flex-col">
                
                {/* Заголовок списка */}
                <h3 className="text-lg font-bold text-[#00396a] mb-4 px-1 border-b border-gray-100 pb-3">
                    {aboutTab === 'insurance' ? 'Страховые компании' : 'Партнеры СРО'}
                </h3>

                {/* Список элементов (в одну колонку) */}
                <div className="flex flex-col gap-3">
                    {aboutData[aboutTab].list.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-[#c0dcf7] flex items-center justify-center shrink-0">
                                <CheckCircle size={14} className="text-[#00396a]" />
                            </div>
                            <span className="text-xs font-bold text-[#00396a] leading-snug">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
)}

            {/* Mobile How it works */}
            <section id="how" className="bg-[#1976d2] py-12 rounded-[32px] mx-4 mb-16 shadow-lg">
                <div className="px-4 text-center mb-8">
                    <h2 className="text-2xl font-extrabold text-white mb-4">Как это работает?</h2>
                    <p className="text-lg text-white/90">{data.howItWorks}</p>
                </div>
                {/* Карусель (она уже адаптивна) */}
                <ImageCarousel images={data.carouselImages} variant="compact" fit="contain" />
                <div className="px-4 mt-8">
                    <Button variant="custom" className="bg-white text-[#00396a] w-full py-4 text-lg" href="https://id.sspb.ru">{data.nameButton}</Button>
                </div>
            </section>

            {/* Mobile Features (1 колонка) */}
            <section className="px-4 mb-16">
                <h2 className="text-2xl font-extrabold text-center text-[#00396a] mb-8">Возможности</h2>
                <div className="grid gap-4">
                    {data.features.map((feat, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-2 text-[#00396a]">{feat.title}</h3>
                            <p className="text-base text-[#00396a]">{feat.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mobile Form (Вертикальная) */}
            <section className="bg-[#1976d2] py-12 mx-4 rounded-[32px] shadow-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div className="relative z-10 px-6">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white mb-3">Готовы начать?</h2>
            <p className="text-blue-100">Оставьте заявку, и мы свяжемся с Вами</p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <input 
                name="name" 
                required 
                type="text" 
                className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-md" 
                placeholder="Ваше Имя" 
            />
            <input 
                name="phone" 
                required 
                type="tel" 
                className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-md" 
                placeholder="Телефон" 
            />
            <input 
                name="email" 
                required 
                type="email" 
                className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-md" 
                placeholder="Email" 
            />
            
            {/* Блок чекбоксов */}
            <div className="flex flex-col items-start gap-3 mt-4">
                
                {/* 1. Обязательная галочка */}
                <div className="flex items-start gap-3">
                    <div className="relative flex items-start">
                        <input 
                            id="privacy-mob" 
                            name="privacy"
                            type="checkbox" 
                            required 
                            className=" w-5 h-5 text-[#00396a] bg-white border-transparent rounded focus:ring-white focus:ring-offset-0 cursor-pointer" 
                        />
                    </div>
                    <label htmlFor="privacy-mob" className="text-xs text-blue-100 cursor-pointer hover:text-white transition-colors text-left leading-tight">
                        Я согласен на обработку персональных данных
                    </label>
                </div>

                {/* 2. Необязательная галочка */}
                <div className="flex items-start gap-3">
                    <div className="relative flex items-start">
                        <input 
                            id="subscribe-mob" 
                            name="subscribe"
                            type="checkbox" 
                            className=" w-5 h-5 text-[#00396a] bg-white border-transparent rounded focus:ring-white focus:ring-offset-0 cursor-pointer" 
                        />
                    </div>
                    <label htmlFor="subscribe-mob" className="text-xs text-blue-100 cursor-pointer hover:text-white transition-colors text-left leading-tight">
                        Я согласен получать рассылку о скидках и новых функциях
                    </label>
                </div>
            </div>
            <Button type="submit" className="w-full bg-[#00396a] text-[#00396a] hover:text-white hover:bg-[#002a4d] transition-all duration-300">Получить доступ</Button>
        </form>
    </div>
</section>
        </div>
    );
};

export default ProductPageMobile;