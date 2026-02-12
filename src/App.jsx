/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Shield, Award, Clock, X, ChevronDown, MapPin, ArrowDownCircle, LayoutDashboard, CheckCircle2, 
  ChevronLeft, ChevronRight, UserCheck, Calculator, PiggyBank, FileCheck, CheckCircle,
  Gift, Database, Zap, Star, Key, // Иконки АУ Публикатор
  Brain, Lock, FileText, Activity // Новые иконки для AI Referent
} from 'lucide-react';
import LoginScreen from './pages/LoginScreen';
import smallLogo from './assets/мелкий_лого.svg';
import RegistrationScreen from './pages/RegistrationScreen';

// Импорт изображений для карусели СБ Арбитр
import lkBlur1 from './assets/лк_блюр_1.jpg'; 
import lkBlur2 from './assets/лк_блюр_2.jpg';

// Заглушки изображений для АУ Публикатора (6 штук)
import pubSlide1 from "./assets/скрин_1_публикатор.jpg";
import pubSlide2 from  "./assets/скрин_2_публикатор.jpg";
import pubSlide3 from  "./assets/скрин_3_публикатор.jpg";
import pubSlide4 from  "./assets/скрин_4_публикатор.jpg";
import pubSlide5 from  "./assets/скрин_5_публикатор.jpg";
import pubSlide6 from  "./assets/скрин_6_публикатор.jpg";

// Заглушки для AI Referent (3 штуки)
import aiSlide1 from "./assets/скрин_1_референт.jpg";
import aiSlide2 from "./assets/скрин_2_референт.jpg";
import aiSlide3 from "./assets/скрин_3_референт.jpg";

// --- ДАННЫЕ ---

const requisitesData = [
  { label: "Полное наименование", value: "Акционерное общество «ССПБ»" },
  { label: "Сокращенное наименование", value: "АО «ССПБ»" },
  { label: "ИНН", value: "9701151149" },
  { label: "КПП", value: "770101001" },
  { label: "ОГРН", value: "1197746727012" },
  { isHeader: true, label: "Расчётный счёт" },
  { label: "Номер счета", value: "40702810402680003363" },
  { label: "Банк", value: "АО «АЛЬФА-БАНК»" },
  { label: "БИК", value: "044525593" },
  { label: "Корр. счет", value: "30101810200000000593" },
];

const sbArbitrAdvantages = [
  {
    icon: UserCheck,
    title: "Индивидуально",
    desc: "Персональный менеджер поможет в оформлении необходимых документов и корректировок к договору в кратчайшие сроки."
  },
  {
    icon: Calculator,
    title: "Удобно",
    desc: "Предоставляем расчет стоимости договора страхования по всем СК, аккредитованных при Вашем СРО, в течение 3-4 рабочих дней."
  },
  {
    icon: PiggyBank,
    title: "Выгодно",
    desc: "Мы подберем наиболее выгодный для Вас вариант, сэкономив Ваше время."
  },
  {
    icon: FileCheck,
    title: "Прозрачно",
    desc: "При заключении договора страхования через СБ Арбитр стоимость договора страхования такая же, как в страховой компании."
  }
];

const auPublikatorAdvantages = [
  {
    icon: Gift,
    title: "Бесплатный сервис",
    desc: "Пользуйтесь сервисом бесплатно и оплачивайте только размещение публикаций в «КоммерсантЪ»."
  },
  {
    icon: Database,
    title: "Автозаполнение",
    desc: "Введите ИНН арбитражного управляющего и должника, а остальные данные автоматически загрузятся в систему."
  },
  {
    icon: Zap,
    title: "Быстрое выставление счетов",
    desc: "Выполните всего 7 шагов и получите готовый бланк с рассчитанной стоимостью."
  },
  {
    icon: Star,
    title: "Система лояльности",
    desc: "За пользование сервисом начисляются баллы для анализа банковских выписок в AI Referent."
  }
];

const aiReferentAdvantages = [
  {
    icon: Zap,
    title: "Экономия времени",
    desc: "Автоматический анализ данных и формирование отчетов за минуту."
  },
  {
    icon: Brain,
    title: "«Умный» анализ",
    desc: "Быстрое выявление подозрительных сделок и рисков доначисления налогов."
  },
  {
    icon: CheckCircle,
    title: "Минимизация ошибок",
    desc: "На 99,9% меньше ошибок благодаря отказу от ручной обработки документов."
  },
  {
    icon: Lock,
    title: "Безопасность данных",
    desc: "Обработка данных на собственных серверах, защищённых по ISO 27001, исключает возможность «утечек»."
  }
];

// --- КОМПОНЕНТЫ ---

function Typewriter({ text, delay = 50 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
  setDisplayed("");
  
  let index = 0;
  const timer = setInterval(() => {
    if (index < text.length) {
      setDisplayed(text.substring(0, index + 1));
      index++;
    } else {
      clearInterval(timer);
    }
  }, delay);
  
  return () => clearInterval(timer);
}, [text, delay]);

  return (
    <span className="bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
      {displayed}
    </span>
  );
}

function RequisitesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-manrope">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-[#f8fafc] text-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-white">
          <h3 className="text-xl font-bold text-slate-900">Реквизиты компании</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition">
            <X size={24} className="text-slate-500" />
          </button>
        </div>
        
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-1">
            {requisitesData.map((item, idx) => (
              item.isHeader ? (
                 <div key={idx} className="pt-4 pb-2 text-lg font-bold text-slate-900">{item.label}</div>
              ) : (
                <div key={idx} className={`flex flex-col sm:flex-row sm:justify-between py-3 px-4 rounded-lg ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}`}>
                  <span className="text-sm font-medium text-slate-500 sm:w-1/2">{item.label}</span>
                  <div className="flex items-center gap-2 sm:w-1/2 sm:text-right sm:justify-end mt-1 sm:mt-0">
                    <span className="font-semibold text-slate-800 select-all">{item.value}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center text-xs text-slate-400">
          Акционерное общество «ССПБ»
        </div>
      </motion.div>
    </div>
  );
}

function ImageCarousel({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const SWIPE_CONFIDENCE_THRESHOLD = 10000;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-[40px] shadow-2xl md:p-10 relative">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <button
            onClick={() => paginate(-1)}
            className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-lg z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-slate-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
                    paginate(1);
                  } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full object-cover"
                alt="Слайд интерфейса"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 flex items-center justify-between px-2 md:hidden pointer-events-none">
                <button onClick={() => paginate(-1)} className="pointer-events-auto p-2 bg-slate-800/80 text-white rounded-full backdrop-blur-sm">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={() => paginate(1)} className="pointer-events-auto p-2 bg-slate-800/80 text-white rounded-full backdrop-blur-sm">
                   <ChevronRight size={20} />
                </button>
            </div>
          </div>

          <button
            onClick={() => paginate(1)}
            className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-lg z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, idx) => {
            const isActive = idx === imageIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                    const diff = idx - (page % images.length);
                    paginate(diff);
                }}
                className={`
                  w-3 h-3 rounded-full border-2 border-slate-800 transition-all duration-300
                  ${isActive ? 'bg-slate-800 scale-125' : 'bg-transparent hover:bg-slate-200'}
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ConsultationForm({ title = "Оставьте контакты, чтобы получить доступ", btnText = "Отправить заявку" }) {
  const [isSent, setIsSent] = useState(false);

  // Автоматическое определение ссылки в зависимости от заголовка
  const loginUrl = title === "Получить доступ" 
    ? "https://doc.ai-referent.ru/projects" // Ссылка для AI Referent
    : "https://сбарбитр.рф/login";   // Ссылка для СБ Арбитр и АУ Публикатор

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setIsSent(true), 500);
  };

  if (isSent) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl mx-auto bg-[#00396a]/20 backdrop-blur-lg p-10 rounded-3xl text-center shadow-2xl"
      >
        <CheckCircle size={64} className="text-emerald-400 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-white mb-8">Менеджер свяжется с вами в ближайшее время.</p>
        <button 
          onClick={() => setIsSent(false)}
          className="text-[#56b1ff] font-bold uppercase tracking-wider text-sm hover:text-white transition"
        >
          Отправить еще одну
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#ffffff]/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-left">{title}</h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Как к вам обращаться?" 
              required
              className="w-full h-14 bg-[#00396a]/40 border border-white/20 rounded-xl px-5 text-white placeholder:text-white/50 focus:outline-none focus:border-[#56b1ff] focus:bg-[#00396a]/60 transition-all"
            />
          </div>
          
          <div className="flex-1">
             <input 
              type="email" 
              placeholder="Email" 
              required
              className="w-full h-14 bg-[#00396a]/40 border border-white/20 rounded-xl px-5 text-white placeholder:text-white/50 focus:outline-none focus:border-[#56b1ff] focus:bg-[#00396a]/60 transition-all"
            />
          </div>

          <div className="flex-1">
             <input 
              type="tel" 
              placeholder="Телефон" 
              required
              className="w-full h-14 bg-[#00396a]/40 border border-white/20 rounded-xl px-5 text-white placeholder:text-white/50 focus:outline-none focus:border-[#56b1ff] focus:bg-[#00396a]/60 transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="lg:w-48 h-14 bg-white/70 text-[#00396a] font-bold rounded-xl uppercase tracking-wider shadow-lg hover:shadow-[#56b1ff]/30 transition-all shrink-0"
          >
            {btnText}
          </motion.button>
        </form>
        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer group text-left">
                <input type="checkbox" required className="accent-[#56b1ff] w-5 h-5 cursor-pointer shrink-0" />
                <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors">
                  Я даю согласие на обработку персональных данных
                </span>
            </label>
            
            <a 
                href={loginUrl} 
                className="flex items-center gap-2 text-white/80 hover:text-[#56b1ff] transition-colors text-sm font-medium whitespace-nowrap"
            >
                <Key size={18} />
                Войти в Личный кабинет
            </a>
        </div>
      </div>
    </div>
  );
}

// === КОМПОНЕНТ ДЛЯ БЛОКА "ГОТОВЫЕ РЕШЕНИЯ" (AI Referent) ===
function ReadySolutions() {
  const cardVariants = {
    hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10 text-left">
      {/* КАРТОЧКА 1: Анализ первичной документации */}
      <motion.div 
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[40px] overflow-hidden bg-white shadow-2xl border border-white/20 flex flex-col h-full"
      >
        <div className="bg-gradient-to-br from-[#00396a] to-[#005bb5] p-10">
          <h3 className="text-3xl font-bold text-white mb-4">Анализ первичной документации</h3>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 opacity-90">
            Обработка массивов от 100 000 документов, мгновенный аудит подозрительных сделок и нарушений.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Анализ платежей", "Транзакции групп", "Поиск расхождений", "Риски операций"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium bg-white/10 rounded-full px-4 py-2 border border-white/10">
                <CheckCircle2 size={16} className="text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 p-10 space-y-10 bg-slate-50">
          {/* Секция: Вы загружаете */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ArrowDownCircle className="text-[#00396a]" size={28} />
              <h4 className="text-[#00396a] font-black uppercase tracking-widest text-sm">Вы загружаете:</h4>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-600 font-medium">
              {["Банковские выписки", "УПД, счета-фактуры", "Накладные", "Акты КС-2/КС-3", "Акты по поставкам", "Договоры"].map((li, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {li}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-slate-200 w-full" />

          {/* Секция: Вы получаете */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LayoutDashboard className="text-[#00396a]" size={28} />
              <h4 className="text-[#00396a] font-black uppercase tracking-widest text-sm">Вы получаете:</h4>
            </div>
            <p className="text-[#00396a] font-bold mb-4">Интерактивный отчет со ссылками на документы:</p>
            <ul className="space-y-3">
              {[
                "Сверка с данными систем учета",
                "Проверка кредиторской и дебиторской задолженностей",
                "Обоснованность платежей",
                "Риски доначисления налогов"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1.5 w-2 h-2 rounded-sm bg-blue-600 rotate-45 shrink-0" />
                  <span className="leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>

      {/* КАРТОЧКА 2: Анализ подозрительных сделок */}
      <motion.div 
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[40px] overflow-hidden bg-white shadow-2xl border border-white/20 flex flex-col h-full"
      >
        <div className="bg-gradient-to-br from-[#00396a] to-[#005bb5] p-10">
          <h3 className="text-3xl font-bold text-white mb-4">Анализ подозрительных сделок</h3>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 opacity-90">
            Оценка финансового положения компании и выявление аномальных операций за несколько минут.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Аномальные платежи", "Аффилированные лица", "Чистые обороты", "Переводы на ИП"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium bg-white/10 rounded-full px-4 py-2 border border-white/10">
                <CheckCircle2 size={16} className="text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 p-10 space-y-10 bg-slate-50">
          {/* Секция: Вы загружаете */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ArrowDownCircle className="text-[#00396a]" size={28} />
              <h4 className="text-[#00396a] font-black uppercase tracking-widest text-sm">Вы загружаете:</h4>
            </div>
            <div className="inline-block px-5 py-3 bg-blue-50 border border-blue-100 rounded-2xl text-blue-900 font-bold">
              Выписки по одной или нескольким компаниям группы
            </div>
          </div>

          <div className="h-px bg-slate-200 w-full" />

          {/* Секция: Вы получаете */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LayoutDashboard className="text-[#00396a]" size={28} />
              <h4 className="text-[#00396a] font-black uppercase tracking-widest text-sm">Вы получаете:</h4>
            </div>
            <p className="text-[#00396a] font-bold mb-4">Персонализированный дашборд с детализацией:</p>
            <ul className="space-y-3">
              {[
                "Распределение по счетам и типам платежей",
                "Анализ крупнейших контрагентов",
                "Карта аффилированных компаний",
                "Реальные денежные потоки (чистые обороты)"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1.5 w-2 h-2 rounded-sm bg-blue-600 rotate-45 shrink-0" />
                  <span className="leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// === ЭКРАН AI REFERENT ===
function AiReferentScreen() {
    const aiImages = [aiSlide1, aiSlide2, aiSlide3];

    return (
        <div className="animate-in fade-in duration-500">
           {/* HERO SECTION */}
           <div className="flex flex-col items-center justify-center text-center mt-12 mb-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
              <Typewriter text="AI REFERENT" delay={70} />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-3xl"
            >
              Платформа для финансового анализа деятельности предприятия
            </motion.p>
          </div>
    
    
          {/* Блок О ПРОДУКТЕ */}
        <div className="mb-12 max-w-6xl mx-auto px-8 py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
        <div className="flex flex-col items-center mb-10">
            <h2 className="text-4xl font-bold text-white uppercase">
            О продукте
            </h2>
        </div>
        
        <div className="text-xl text-white/90 space-y-6 leading-relaxed text-left max-w-3xl mx-auto">
            
            <p>
            Наш сервис автоматически обрабатывает финансовые документы, структурирует данные, выявляет риски и формирует отчетность,
            на которую можно опираться при принятии решений.
            </p>

            <p>
            Мы разработали высокотехнологичные готовые решения:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-white">
            <li>Анализ первичной документации</li>
            <li>Анализ подозрительных сделок в один клик</li>
            </ul>
        </div>
        </div>

            {/* Блок ЛИЧНЫЙ КАБИНЕТ */}
          <div className="mb-32 mt-32 max-w-6xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold uppercase text-white mb-6">
                Личный кабинет
             </h2>
             <p className="md:text-2xl text-white leading-relaxed font-light">
                В личном кабинете AI Referent собрана вся аналитика для выявления потенциальных рисков и принятия обоснованных решений.
                Интуитивно понятный интерфейс с готовыми отчётами и полной автоматизацией
                сводит ручной труд к минимуму, ускоряя анализ в 5 раз.
             </p>
          </div>
          
          <div className="mb-16 px-4">
            <ImageCarousel images={aiImages} />
          </div>
            <div className="mt-12 mb-24 flex justify-center">
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-20 py-3 rounded-full bg-white border uppercase border-white/50 text-[#00396a] text-lg font-bold hover:bg-[#00396a]/60 hover:text-white transition-all shadow-lg"
                >
                  Получить доступ
                </motion.a>
            </div>
          {/* БЛОК ГОТОВЫЕ РЕШЕНИЯ */}
          <div className="mb-32 max-w-6xl mx-auto px-4">
             <h2 className="text-3xl font-bold uppercase text-white mt-32 mb-16 text-center">
                Готовые решения
             </h2>
             <ReadySolutions />
          </div>
           
    
          {/* Блок ПРЕИМУЩЕСТВА */}
          <div className="mb-24 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase text-white mb-16 opacity-100 text-center">
              Преимущества
            </h2>
            <div className="flex flex-col gap-10">
              {aiReferentAdvantages.map((el, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-cyan-100/20 flex items-center justify-center text-cyan-200 border border-cyan-100/30">
                    <el.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 uppercase text-white">{el.title}</h4>
                    <p className="text-white leading-relaxed text-xl">
                        {el.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20 px-4">
            <ConsultationForm title="Получить доступ" />
          </div>

        </div>
      );
}

// === ЭКРАН СБ АРБИТР ===
function SbArbitrScreen() {
  const sbImages = [lkBlur1, lkBlur2];
  
  return (
    <div className="animate-in fade-in duration-500">
       <div className="flex flex-col items-center justify-center text-center mt-12 mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
          <Typewriter text="СБ АРБИТР" delay={70} />
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 font-light max-w-3xl"
        >
          Эксклюзивный представитель по страхованию ответственности арбитражных управляющих
        </motion.p>
      </div>

      {/* Блок О ПРОДУКТЕ */}
<div className="mb-12 max-w-6xl mx-auto px-8 py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
  <div className="flex flex-col items-center mb-10">
    <h2 className="text-4xl font-bold text-white uppercase">
      О продукте
    </h2>
  </div>
  
  <div className="text-xl text-white/90 space-y-6 leading-relaxed text-left max-w-3xl mx-auto">
    <p>
      Уже на протяжении 8 лет мы сотрудничаем с ведущими Страховыми Компаниями:
    </p>
    
    <ul className="list-disc pl-6 space-y-2 marker:text-white">
      <li>«ТИТ»</li>
      <li>«Британский Страховой Дом»</li>
      <li>«Международная страховая группа»</li>
      <li>«Аскор»</li>
      <li>НКО ПОВС «СПЕКТР»</li>
      <li>ОВС «Сириус»</li>
    </ul>

    <p>
      Мы помогаем более 30 СРО взаимодействовать со Страховыми Компаниями, не увеличивая стоимость договора страхования.
    </p>
  </div>
</div>

      <div className="mb-32 mt-32 max-w-6xl mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold uppercase text-white mb-8">
            Личный кабинет
         </h2>
         <p className="md:text-2xl text-white leading-relaxed font-light">
           Программный комплекс «СБ Арбитр» создан для упрощения процедуры страхования арбитражных управляющих.
           Заполнив лишь одну заявку, Вы получите расчет стоимости сразу по всем Страховым компаниям, которые аккредитованы при Вашем СРО. При этом стоимость договора страхования будет такой же, как в Страховой компании.
         </p>
      </div>

      <div className="mb-16 px-4">
        <ImageCarousel images={sbImages} />
      </div>

      <div className="mt-12 mb-24 flex justify-center">
            <motion.a 
              href="https://сбарбитр.рф/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-20 py-3 rounded-full bg-white border uppercase border-white/50 text-[#00396a] text-lg font-bold hover:bg-[#00396a]/60 hover:text-white transition-all shadow-lg"
            >
              Оформить страховку
            </motion.a>
        </div>

      <div className="mb-24 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold uppercase text-white mb-16 text-center">
          Преимущества
        </h2>
        <div className="flex flex-col gap-10">
          {sbArbitrAdvantages.map((el, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-cyan-100/20 flex items-center justify-center text-cyan-200 border border-cyan-100/30">
                <el.icon size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 uppercase text-white">{el.title}</h4>
                <p className="text-white leading-relaxed text-xl">
                    {el.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20 px-4">
        <ConsultationForm />
      </div>

    </div>
  );
}

// === ЭКРАН АУ ПУБЛИКАТОР ===
function AuPublikatorScreen() {
    const pubImages = [pubSlide1, pubSlide2, pubSlide3, pubSlide4, pubSlide5, pubSlide6];

    return (
        <div className="animate-in fade-in duration-500">
           <div className="flex flex-col items-center justify-center text-center mt-12 mb-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
              <Typewriter text="АУ ПУБЛИКАТОР" delay={70} />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-3xl"
            >
              Автоматизированный сервис публикаций в КоммерсантЪ
            </motion.p>
          </div>
    {/* Блок О ПРОДУКТЕ */}
            <div className="mb-12 max-w-6xl mx-auto px-8 py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-4xl font-bold text-white uppercase">
                О продукте
                </h2>
            </div>
            
            <div className="text-xl text-white/90 space-y-6 leading-relaxed text-left max-w-3xl mx-auto">
                <p>
                <span className="font-bold text-white">АУ-публикатор</span> — первый бесплатный сервис для автоматизированной публикации сообщений в газете «КоммерсантЪ».
                </p>
                
                <p>
                Платформа берёт на себя всю цепочку работ:
                от создания и проверки текста до формирования счёта и ведения единого реестра публикаций.
                </p>

                <p>
                Более чем за год работы сервис доказал свою надёжность — через него успешно опубликовано свыше 6 000 сообщений.
                </p>
            </div>
            </div> 
            <div className="mb-32 mt-32 max-w-6xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold uppercase text-white mb-8">
                Личный кабинет
             </h2>
             <p className="md:text-2xl text-white leading-relaxed font-light">
                Интуитивно понятный интерфейс и автоматическая загрузка данных из ЕФРСБ.
                Создание заявки всего за 7 шагов: от выбора типа публикации до проверки автоматически сгенерированного текста сообщения.
             </p>
          </div>
          <div className="mb-16 px-4">
            <ImageCarousel images={pubImages} />
          </div>
          

            {/* Кнопку лучше оставить сразу ПОД блоком, как в СБ Арбитр, для сохранения стиля */}
            <div className="mt-12 mb-24 flex justify-center">
                <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-20 py-3 rounded-full bg-white border uppercase border-white/50 text-[#00396a] text-lg font-bold hover:bg-[#00396a]/60 hover:text-white transition-all shadow-lg"
                >
                Начать сейчас
                </motion.a>
            </div>
    
          
    
          <div className="mb-24 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase text-white mb-16 text-center">
              Преимущества
            </h2>
            <div className="flex flex-col gap-10">
              {auPublikatorAdvantages.map((el, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-cyan-100/20 flex items-center justify-center text-purple-200 border border-purple-100/30">
                    <el.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 uppercase text-white">{el.title}</h4>
                    <p className="text-white leading-relaxed text-xl">
                        {el.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

// --- ОСНОВНОЙ КОМПОНЕНТ ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-manrope text-white/90 overflow-x-hidden relative selection:bg-cyan-500/30 bg-gradient-to-br from-[#56b1ff] to-[#00396a] bg-fixed">
      
      <AnimatePresence>
        {isModalOpen && <RequisitesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {(activeScreen !== "login" && activeScreen !== "register") ? (
          <>
            <nav key="navbar" className="fixed top-3 left-0 w-full z-50 flex justify-center px-6">
              <div className="max-w-8xl w-full h-18 bg-[#00396a]/20 backdrop-blur-2xl rounded-full border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-between px-5">
                
                <div 
                  className="flex items-center gap-4 cursor-pointer shrink-0"
                  onClick={() => setActiveScreen("home")}
                >
                  <motion.img 
                    src={smallLogo} 
                    className="w-12 h-12" 
                    alt="Logo"
                    whileHover={{ rotate: 10 }}
                  />
                  <span className="text-2xl font-bold tracking-wide text-white">АО ССПБ</span>
                </div>

                <div className="flex-1 flex justify-evenly items-center px-10">
                  <div 
                    className="relative group py-4"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button className="flex items-center gap-2 text-lg font-medium uppercase tracking-wider text-white hover:text-white transition-colors">
                      Продукты <ChevronDown size={20} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-16 left-1/2 -translate-x-1/2 w-64  bg-[#00396a]/70 border border-white/20 rounded-3xl shadow-2xl overflow-hidden py-4 z-50"
                        >
                          <button 
                             onClick={() => { setActiveScreen('sb-arbitr'); setIsProductsOpen(false); }}
                             className="block w-full text-left px-8 py-3 text-lg text-white hover:text-white hover:bg-white/5 transition-colors font-medium"
                          >
                             СБ Арбитр
                          </button>
                          
                          <button 
                             onClick={() => { setActiveScreen('au-publikator'); setIsProductsOpen(false); }}
                             className="block w-full text-left px-8 py-3 text-lg text-white hover:text-white hover:bg-white/5 transition-colors font-medium"
                          >
                             АУ-Публикатор
                          </button>

                          <button 
                             onClick={() => { setActiveScreen('ai-referent'); setIsProductsOpen(false); }}
                             className="block w-full text-left px-8 py-3 text-lg text-white hover:text-white hover:bg-white/5 transition-colors font-medium"
                          >
                             AI Referent
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <a href="#company" className="text-lg font-medium uppercase tracking-wider text-white hover:text-white transition-colors relative group">
                    О компании
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                  </a>

                  <a href="#contacts" className="text-lg font-medium uppercase tracking-wider text-white hover:text-white transition-colors relative group">
                    Контакты
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                  </a>
                </div>

                <div className="shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-white border border-white/50 text-[#00396a] text-lg font-bold uppercase hover:bg-[#00396a]/60 hover:text-white transition-all shadow-lg"
                    onClick={() => setActiveScreen("login")}
                  >
                    Войти в ССПБ ID
                  </motion.button>
                </div>

              </div>
            </nav>

            <main key="main" className="pt-35 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
              
              {activeScreen === "sb-arbitr" ? (
                <SbArbitrScreen />
              ) : activeScreen === "au-publikator" ? (
                <AuPublikatorScreen />
              ) : activeScreen === "ai-referent" ? (
                <AiReferentScreen />
              ) : (
                <div className="animate-in fade-in">
                  <div className="flex flex-col items-center justify-center text-center mt-12 mb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
                      <Typewriter text="ЦИФРОВАЯ ЭКОСИСТЕМА СОПРОВОЖДЕНИЯ ПРОЦЕДУР БАНКРОТСТВА" delay={40} />
                    </h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      className="text-xl md:text-2xl text-white font-light max-w-3xl"
                    >
                      Комплексные IT-решения для арбитражных управляющих и финансовых аналитиков
                    </motion.p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                      { 
                        title: "СБ Арбитр", 
                        desc: "Эксклюзивный представитель по страхованию ответственности арбитражных управляющих. Полное покрытие рисков.",
                        action: () => setActiveScreen('sb-arbitr') 
                      },
                      { 
                        title: "AI Referent", 
                        desc: "Система глубокого финансового анализа с применением нейросетей. Автоматический аудит и прогнозирование рисков.",
                        action: () => setActiveScreen('ai-referent')
                      },
                      { 
                        title: "АУ-Публикатор", 
                        desc: "Сервис автоматизированной публикации сведений в КоммерсантЪ и ЕФРСБ. Экономия до 40% времени.",
                        action: () => setActiveScreen('au-publikator')
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#91ccff] backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all group flex flex-col items-start text-left h-full"
                      >
                        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[#00396a] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xl leading-relaxed mb-8 flex-grow">
                          {item.desc}
                        </p>
                        <button 
                          onClick={item.action}
                          className="px-6 py-2 rounded-full bg-white border border-white/50 text-[#00396a] text-lg font-bold hover:bg-[#00396a]/60 hover:text-white transition-all shadow-lg"
                        >
                          Подробнее о продукте
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-32 max-w-7xl mx-auto px-8 py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl text-center" id="company">
                    <h2 className="text-3xl font-bold uppercase text-white mb-6">
                      О компании
                    </h2>
                    <p className="md:text-2xl text-white leading-relaxed font-light">
                      Акционерное общество «ССПБ» — российская ИТ-компания, специализирующаяся на автоматизации и оптимизации процессов, связанных с сопровождением процедур банкротства.
                    </p>
                  </div>

                  <div className="mb-30 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase text-white mb-16 opacity-100 text-center">
                      Почему выбирают нас
                    </h2>

                    <div className="flex flex-col gap-10">
                      {[
                        { 
                            icon: Clock, 
                            title: "Многолетний опыт", 
                            desc: "Уже 7 лет мы успешно сотрудничаем с арбитражными управляющими и их командами, знаем специфику их работы изнутри, потребности и риски. Наши продукты являются надежным помощником в работе, позволяющим экономить деньги и время." 
                        },
                        { 
                            icon: Shield, 
                            title: "Гарантия информационной безопасности", 
                            desc: "Мы храним данные на своих серверах, размещенных в крупных Дата-центрах на территории России, регулярно выполняем резервное копирование, что позволит в случае необходимости восстановить данные без потерь и в короткие сроки." 
                        },
                        { 
                            icon: Award, 
                            title: "Аккредитация и статус", 
                            desc: "АО «ССПБ» зарегистрировано Министерством цифрового развития, связи и массовых коммуникаций Российской Федерации и Роскомнадзором в соответствующих реестрах." 
                        },
                      ].map((el, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                          <div className="shrink-0 w-16 h-16 rounded-2xl bg-cyan-100/20 flex items-center justify-center text-cyan-200 border border-cyan-100/30">
                            <el.icon size={32} />
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold mb-3 uppercase text-white">{el.title}</h4>
                            <p className="text-white leading-relaxed text-xl">
                                {el.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </main>

            <footer className="border-t border-white/20 bg-[#00396a]/60 pt-10 pb-10" id="contacts">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                  
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-2xl font-bold text-white mb-4">
                        {activeScreen === 'sb-arbitr' ? "ООО «СБ Арбитр»" 
                         : activeScreen === 'ai-referent' ? "ООО «Труф Теллер»"
                         : "АО «ССПБ»"}
                      </h5>
                      <p className="text-white max-w-xl">
                        {activeScreen === 'sb-arbitr' 
                          ? "Эксклюзивный представитель по страхованию ответственности арбитражных управляющих."
                          : activeScreen === 'ai-referent'
                          ? "Разработчик платформы AI Referent для финансового анализа."
                          : "Российский разработчик специализированных ИТ-решений для арбитражных управляющих."
                        }
                      </p>
                    </div>
                    {activeScreen === 'home' && (
                      <div className="flex flex-col gap-3">
                        <a href="#" className="text-white/70 text-sm font-semibold uppercase tracking-wider hover:text-white transition flex items-center gap-2">
                          Реестр аккредитованных ИТ-компаний <ExternalLink size={14} />
                        </a>
                        <a href="#" className="text-white/70 text-sm font-semibold uppercase tracking-wider hover:text-white transition flex items-center gap-2">
                          Реестр операторов персональных данных <ExternalLink size={14} />
                        </a>
                        {activeScreen !== 'ai-referent' && (
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="text-white/70 text-sm font-semibold uppercase tracking-wider hover:text-white transition flex items-center gap-2"
                            >
                            Реквизиты
                        </button>
                    )}
                      </div>
                    )}
                  </div>

                  <div className="md:text-right flex flex-col md:items-end space-y-8">
                    <div>
                      <h6 className="text-[#56b1ff] text-lg font-black uppercase mb-6">КОНТАКТНАЯ ИНФОРМАЦИЯ</h6>
                      
                      <div className="space-y-4 text-lg text-white/90">
                          {/* РАЗНЫЕ КОНТАКТЫ ДЛЯ СТРАНИЦ */}
                          {activeScreen === 'ai-referent' ? (
                             <>
                                <a href="tel:+79050130321" className="block hover:text-white transition">+7 (905) 013-03-21</a>
                                <a href="mailto:Okunev.dm.truth@yandex.ru" className="block hover:text-white transition">Okunev.dm.truth@yandex.ru</a>
                             </>
                          ) : (
                             <>
                                <div className="flex items-center md:justify-end gap-3">
                                  <MapPin size={20} className="text-[#56b1ff]" />
                                  <span className="text-right">105082, г. Москва, Балакиревский пер., д. 19, офис 109</span>
                                </div>
                                <a href="tel:+74957379370" className="block hover:text-white transition">8 (495) 737−93−70</a>
                                <a href="mailto:director@sspb.ru" className="block hover:text-white transition">director@sspb.ru</a>
                             </>
                          )}
                      </div>
                    </div>

                    {/* Кнопку реквизитов скрываем на AI Referent */}
                    
                  </div>
                </div>
              </div>
            </footer>
          </>
        ) : activeScreen === "login" ? (
          <LoginScreen
            key="login"
            onBack={() => setActiveScreen("home")}
            onRegisterClick={() => setActiveScreen("register")}
          />
        ) : (
          <RegistrationScreen
            key="register"
            onBack={() => setActiveScreen("home")}
            onLoginClick={() => setActiveScreen("login")}
          />
        )}
      </AnimatePresence>
      
      {/* СТИЛИ ДЛЯ СВЕЧЕНИЯ (вспомогательные) */}
      <style>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}