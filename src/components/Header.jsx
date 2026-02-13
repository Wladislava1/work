import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // Состояние для модального окна "О компании"
  const [showAbout, setShowAbout] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setIsMobileOpen(false), [location]);

  // Функция для скролла к футеру (Контакты)
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  // Функция для открытия модалки "О компании"
  const openAboutModal = (e) => {
    e.preventDefault();
    setShowAbout(true);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'top-2 left-5 right-5 rounded-full bg-[#00396a]/90 text-white backdrop-blur-md border border-white/20 shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Logo variant={isScrolled ? 'white' : 'mt-0.5 dark'} size={isScrolled ? 'small' : 'normal'}/>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link to="/sb-arbitr" className="text-lg font-medium hover:text-blue-300 transition-colors">СБ Арбитр</Link>
            <Link to="/ai-referent" className="text-lg font-medium hover:text-blue-300 transition-colors">AI Referent</Link>
            <Link to="/au-publicator" className="text-lg font-medium hover:text-blue-300 transition-colors">АУ-Публикатор</Link>
            
            {/* Кнопка "О компании" - открывает модалку */}
            <button onClick={openAboutModal} className="text-lg font-medium hover:text-blue-300 transition-colors">
              О компании
            </button>
            
            {/* Кнопка "Контакты" - скроллит к футеру */}
            <button onClick={scrollToFooter} className="text-lg font-medium hover:text-blue-300 transition-colors">
              Контакты
            </button>

            <Button 
                to="/login"
                variant="custom"
                className={`
                    text-md py-1 px-5 shadow-md border
                    ${isScrolled 
                    ? 'bg-white text-[#00396a] border-white hover:bg-[#00396a] hover:text-white hover:border-[#00396a]' 
                    : 'bg-[#00396a] text-white border-[#00396a] hover:bg-white hover:text-[#00396a] hover:border-white'
                    }
                `}
                >
                Вход в SSPB ID
                </Button>
          </nav>

          {/* Mobile Toggle */}
          <button className={`lg:hidden ${isScrolled ? 'text-white' : 'text-[#00396a]'}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 text-[#00396a] flex flex-col gap-6 lg:hidden border-t mt-2 rounded-3xl mx-2">
            <Link to="/sb-arbitr" className="text-xl font-medium text-[#00396a]">СБ Арбитр</Link>
            <Link to="/ai-referent" className="text-xl font-medium text-[#00396a]">AI Referent</Link>
            <Link to="/au-publicator" className="text-xl font-medium text-[#00396a]">АУ-Публикатор</Link>
            <button onClick={openAboutModal} className="text-xl font-medium text-left text-[#00396a]">О компании</button>
            <button onClick={scrollToFooter} className="text-xl font-medium text-left text-[#00396a]">Контакты</button>
            <Button 
                to="/login"
                className="w-full justify-center py-3"
                >
                Вход в SSPB ID
                </Button>
          </div>
        )}
      </header>

      {/* --- МОДАЛЬНОЕ ОКНО "О КОМПАНИИ" --- */}
      {showAbout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-3xl relative overflow-hidden">
            
            {/* Шапка модалки */}
            <div className="bg-[#00396a] p-6 md:p-8 flex justify-between items-start">
                <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">О компании</h3>
                    <p className="text-blue-200 text-sm md:text-base">Надежный партнер в сфере банкротства</p>
                </div>
                <button onClick={() => setShowAbout(false)} className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                    <X size={24} />
                </button>
            </div>

            {/* Контент */}
            <div className="p-6 md:p-10 text-gray-800 text-base md:text-lg leading-relaxed space-y-6 overflow-y-auto max-h-[70vh]">
                <p>
                    <span className="font-bold text-[#00396a]">Акционерное общество «ССПБ»</span> — российская ИТ-компания, специализирующаяся на автоматизации и оптимизации процессов, связанных с сопровождением процедур банкротства.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                    <p>
                        Уже <span className="font-bold text-[#1976d2]">7 лет</span> мы успешно сотрудничаем с арбитражными управляющими и их командами, знаем специфику их работы изнутри, потребности и риски. Наши продукты являются надежным помощником в работе, позволяющим экономить деньги и время.
                    </p>
                </div>

                <p>
                    Мы храним данные на своих серверах, размещенных в крупных Дата-центрах на территории России, регулярно выполняем резервное копирование, что позволит в случае необходимости восстановить данные без потерь и в короткие сроки.
                </p>

                <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
                    АО «ССПБ» зарегистрировано Министерством цифрового развития, связи и массовых коммуникаций Российской Федерации и Роскомнадзором в соответствующих реестрах.
                </p>
            </div>
            
            {/* Кнопка закрытия (внизу) */}
            <div className="p-6 bg-gray-50 border-t flex justify-center">
                <button 
                    onClick={() => setShowAbout(false)}
                    className="px-8 py-3 bg-[#00396a] text-white rounded-full font-semibold hover:bg-[#1976d2] transition-colors shadow-lg"
                >
                    Понятно
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;