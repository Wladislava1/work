import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

const AuthPage = () => {
  const [view, setView] = useState('login'); // 'login' или 'register'
  const navigate = useNavigate();

  // Функция возврата на главную
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      {view === 'login' ? (
        <LoginScreen 
          onBack={handleBack} 
          onRegisterClick={() => setView('register')} 
        />
      ) : (
        <RegistrationScreen 
          onBack={handleBack} 
          onLoginClick={() => setView('login')} 
        />
      )}
    </>
  );
};

export default AuthPage;