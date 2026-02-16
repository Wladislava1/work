import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрывать мобильное меню при переходе по ссылке
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setIsMobileOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'top-2 left-5 right-5 rounded-full bg-[#00396a]/90 text-white backdrop-blur-md border border-white/20 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* Логотип */}
        <Logo variant={isScrolled ? 'white' : 'mt-0.5 dark'} size={isScrolled ? 'small' : 'normal'}/>

        {/* Десктопное меню: flex-1 позволяет занять все свободное место между лого и кнопкой, а justify-center выравнивает ссылки по центру */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
          <Link to="/sb-arbitr" className="text-lg font-medium hover:text-blue-300 transition-colors">СБ Арбитр</Link>
          <Link to="/ai-referent" className="text-lg font-medium hover:text-blue-300 transition-colors">AI Referent</Link>
          <Link to="/au-publicator" className="text-lg font-medium hover:text-blue-300 transition-colors">АУ-Публикатор</Link>
        </nav>

        {/* Кнопка входа для десктопа (Вынесена из nav для правильного выравнивания) */}
        <div className="hidden lg:block shrink-0">
          <Button 
            to="/login"
            variant="custom"
            className={`
              text-md py-1 px-5 shadow-md hover:shadow-lg
              ${isScrolled 
                ? 'bg-white text-[#00396a]' 
                : 'bg-[#00396a] text-white'
              }
            `}
          >
            Вход в ССПБ ID
          </Button>
        </div>

        {/* Кнопка мобильного меню (Гамбургер) */}
        <button className={`lg:hidden ${isScrolled ? 'text-white' : 'text-[#00396a]'}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 text-[#00396a] flex flex-col gap-6 lg:hidden mt-2 rounded-3xl mx-2 animate-fade-in">
          <Link to="/sb-arbitr" className="text-xl font-medium text-[#00396a]">СБ Арбитр</Link>
          <Link to="/ai-referent" className="text-xl font-medium text-[#00396a]">AI Referent</Link>
          <Link to="/au-publicator" className="text-xl font-medium text-[#00396a]">АУ-Публикатор</Link>
          
          <Button 
            to="/login"
            variant="custom"
            className=" bg-[#00396a] text-white w-full justify-center py-3 mt-2 "
          >
            Вход в ССПБ ID
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;