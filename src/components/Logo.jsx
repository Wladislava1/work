import React from 'react';
import { Link } from 'react-router-dom';
// Импортируем логотип. Если вы переименовали файл, измените название здесь.
import logoWhite from '../assets/smal_logo.svg';
import logoDark from '../assets/logoDark.svg';


const Logo = ({ variant = 'dark' }) => {
  const logoSrc = variant === 'white' ? logoWhite : logoDark;
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Иконка логотипа */}
      <img 
        src={logoSrc} 
        alt="SSPB Logo" 
        className="h-8 md:h-10 w-auto transition-all duration-300"
      />
      
      {/* Текст названия */}
      <span className="text-2xl font-extrabold tracking-tight text-secondary">
        АО «ССПБ»
      </span>
    </Link>
  );
};

export default Logo;