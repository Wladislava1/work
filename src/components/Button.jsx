import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-white text-gray shadow-md hover:shadow-white hover:bg-[#00396a]",
    outline: "border-2 border-primary text-primary hover:bg-blue-50",
    white: "bg-white text-primary shadow-md hover:bg-gray-50"
  };

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;