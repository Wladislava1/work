import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AuthPage from './pages/AuthPage'; // <--- Импортируем новую страницу

// Компонент ScrollToTop (оставляем как было)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />     
      <AppContent />
    </BrowserRouter>
  );
}

// Вынесем контент, чтобы использовать useLocation
const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Скрываем Хедер на странице логина */}
      {!isAuthPage && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} /> {/* <--- Новый роут */}
          <Route path="/:productId" element={<ProductPage />} />
          
          {/* Статические страницы (если нужны) */}
          <Route path="/about" element={<div className="pt-32 px-4">О компании</div>} />
          <Route path="/contacts" element={<div className="pt-32 px-4">Контакты</div>} />
        </Routes>
      </main>

      {/* Скрываем Футер на странице логина */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;