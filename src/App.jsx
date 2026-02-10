/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Shield, Award, Clock, Mail } from 'lucide-react';
import LoginScreen from './pages/LoginScreen';
import smallLogo from './assets/мелкий_лого.svg';
import largeLogo from './assets/крупный_лого.svg';
import RegistrationScreen from './pages/RegistrationScreen';

const navItemsLeft  = ["СБ Арбитр", "AI Referent", "АУ-Публикатор"];
const navItemsRight = ["О компании", "Контакты", "Вход в ССПБ ID"];

function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="relative inline-block">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
        {displayed}
      </h1>
    </div>
  );
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#0f0a2a] to-[#001528] text-white font-['Inter_Tight'] overflow-x-hidden relative selection:bg-cyan-600/40">
      {/* Фоновые неоновые блики */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-5%] right-[-15%] w-[70%] h-[50%] bg-blue-700/8 rounded-full blur-3xl animate-pulse-slow delay-3000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.06),transparent_40%)]" />
      </div>

      <AnimatePresence mode="wait">
        {activeScreen === "home" ? (
          <>
            {/* Навбар */}
            <nav key="navbar" className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
              <div className="backdrop-blur-xl bg-black/30 border border-cyan-500/20 rounded-2xl px-6 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.04)] flex items-center justify-between">
                
                <div className="flex flex gap-7 md:gap-12 items-center lg:gap-18 ml-8">
                  {navItemsLeft.map(item => (
                    <motion.button
                      key={item}
                      whileHover={{ color: "#22d3ee", scale: 1.04 }}
                      className="text-sm md:text-base font-medium tracking-wide uppercase text-cyan-100/80 hover:text-cyan-300 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500" />
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.12, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <img src={smallLogo} className="w-8 h-8 md:w-10 md:h-10 opacity-90" alt="Logo"/>
                </motion.div>

                <div className="flex gap-7 md:gap-12 lg:gap-18 items-center mr-8">
                  {navItemsRight.slice(0, 2).map(item => (
                    <motion.button
                      key={item}
                      whileHover={{ color: "#22d3ee", scale: 1.04 }}
                      className="text-sm md:text-base font-medium tracking-wide uppercase text-cyan-100/80 hover:text-cyan-300 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500" />
                    </motion.button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 rounded-full text-sm font-semibold uppercase tracking-wider text-cyan-300 hover:bg-cyan-500/30 hover:text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
                    onClick={() => setActiveScreen("login")}
                  >
                    Вход в ССПБ ID
                  </motion.button>
                </div>
              </div>
            </nav>

            <main key="main" className="pt-32 md:pt-44 pb-24 relative z-10 px-5 sm:px-8 max-w-7xl mx-auto">
              {/* Hero */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
                <div className="max-w-2xl">
                  <Typewriter text="Специализированный разработчик в сфере сопровождения процедур банкротства" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="relative"
                >
                  <img src={largeLogo} className="w-30 md:w-[150px] lg:w-[350px] h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]" alt="Large Logo"/>
                </motion.div>
              </div>

              {/* Продукты */}
              <div className="grid md:grid-cols-3 gap-8 mb-30">
                {[
                  { title: "СБ Арбитр", desc: "Эксклюзивный представитель по страхованию ответственности арбитражных управляющих" },
                  { title: "AI Referent", desc: "Глубокий финансовый анализ, нейросетевой аудит и прогнозирование рисков" },
                  { title: "АУ-публикатор", desc: "Автоматизированный сервис публикаций в КоммерсантЪ" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, y: -8 }}
                    className="p-10 rounded-3xl bg-black/40 border border-cyan-500/15 backdrop-blur-xl hover:border-cyan-400/40 transition-all group shadow-xl"
                  >
                    <h3 className={`text-xl font-bold mb-4 uppercase ${item.stat ? 'text-white' : 'text-cyan-400'}`}>
                      {item.title}
                    </h3>
                    <p className="text-cyan-100/70 text-sm leading-relaxed mb-6">{item.desc}</p>
                    {!item.stat && (
                      <button className="w-full py-3 rounded-xl bg-cyan-600/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2">
                        Изучить продукт
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Почему выбирают нас */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[0.1em] text-cyan-300/90 drop-shadow-[0_0_15px_cyan] mb-30">
                  Почему выбирают нас
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Shield, title: "Гарантия безопасности", desc: "Уже 7 лет мы успешно сотрудничаем с арбитражными управляющими и их командами, знаем специфику их работы изнутри, потребности и риски. Наши продукты \n являются надежным помощником в работе, позволяющим экономить \n деньги и время." },
                    { icon: Award, title: "Аккредитация Минцифры", desc: "Мы храним данные на своих серверах, размещенных в крупных Дата-центрах на территории России, регулярно выполняем резервное копирование, что позволит в случае необходимости восстановить данные без потерь и в короткие сроки." },
                    { icon: Clock, title: "Многолетний опыт", desc: "АО «ССПБ» зарегистрировано Министерством цифрового развития, связи и массовых коммуникаций Российской Федерации и Роскомнадзором в соответствующих реестрах." },
                  ].map((el, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.04, y: -8 }}
                      className="p-10 cyan-500/15 transition-all group"
                    >
                      <el.icon size={44} className="mx-auto mb-6 text-cyan-400 drop-shadow-[0_0_15px_cyan] group-hover:scale-110 transition-transform" />
                      <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">{el.title}</h4>
                      <p className="text-cyan-100/60 text-lg">{el.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </main>

            {/* Футер */}
            <footer key="footer" className="border-t border-cyan-900/30 bg-black/50 backdrop-blur-xl py-16 px-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                  
                  <div className="flex flex-col items-start text-left space-y-6">
                    <div>
                      <div className="text-4xl font-black uppercase tracking-tighter text-cyan-300/90 mb-4">
                        АО «ССПБ»
                      </div>
                      <p className="text-cyan-100/60 text-sm leading-relaxed max-w-sm">
                        Российский разработчик специализированных ИТ-решений для арбитражных управляющих и процедур банкротства
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 pt-4">
                      <a 
                        href="https://www.gosuslugi.ru/itorgs" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:text-cyan-100 transition flex items-center gap-2"
                      >
                        Мы в Реестре аккредитованных ИТ-компаний <ExternalLink size={14} />
                      </a>
                      <a 
                        href="https://pd.rkn.gov.ru/operators-registry/operators-list/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:text-cyan-100 transition flex items-center gap-2"
                      >
                        Мы в Реестре операторов персональных данных <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-8">
                    <div>
                      <h5 className="text-cyan-400/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        Контактная информация
                      </h5>
                      <div className="flex flex-col gap-4 text-lg">
                        <a href="tel:+74957379370" className="hover:text-cyan-300 transition whitespace-nowrap">
                          8 (495) 737-93-70
                        </a>
                        <div className="flex items-center justify-start md:justify-end gap-3">
                          <Mail size={20} className="text-cyan-400" />
                          <a href="mailto:info@sspb.ru" className="hover:text-cyan-300 transition">
                            director@sspb.ru
                          </a>
                        </div>
                      </div>
                    </div>

                    <button className="px-8 py-4 rounded-full border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-600/20 transition shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                      Реквизиты компании
                    </button>
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

      <style jsx global>{`
        @keyframes pulse-slow { 0%,100% { opacity: 0.4 } 50% { opacity: 0.15 } }
        .animate-pulse-slow { animation: pulse-slow 18s infinite ease-in-out; }
        .delay-3000 { animation-delay: 3s; }
      `}</style>
    </div>
  );
}