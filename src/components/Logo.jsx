import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/smal_logo.svg';
import logoDark from '../assets/logoDark.svg';

const Logo = ({ variant = 'dark', size = 'normal' }) => {
  const logoSrc = variant === 'white' ? logoWhite : logoDark;
  
  // Определяем размер в зависимости от состояния
  const sizeClasses = {
    small: 'h-8 md:h-10',
    normal: 'h-10 md:h-12'
  };

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img 
        src={logoSrc} 
        alt="SSPB Logo" 
        className={`${sizeClasses[size]} w-auto transition-all duration-300`}
      />
      <span className="text-2xl font-extrabold tracking-tight text-secondary">
        АО «ССПБ»
      </span>
    </Link>
  );
};

export default Logo;