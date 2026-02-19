import React from 'react';
// Если захочешь вернуть графический логотип вместо текста, раскомментируй строку ниже:
// import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#00396a] to-[#1976d2] text-white py-12 mt-20">
      
      {/* Flex-контейнер: 
        На мобилках (по умолчанию) - колонки друг под другом (flex-col), с отступом gap-8.
        На десктопе (md) - выстраиваем в линию (flex-row), выравниваем по центру по вертикали (items-center).
      */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
        
        {/* 1. Левая колонка (Крупное название + Копирайт) */}
        <div className="flex flex-col items-start shrink-0">
          {/* <div className="brightness-0 invert mb-2"><Logo /></div> */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">ССПБ ID</h2>
          <p className="text-sm text-blue-200 leading-relaxed">
            © СБ Арбитр 2018-2026.<br className="hidden md:block" /> Все права защищены.
          </p>
        </div>

        {/* Вертикальная линия-разделитель 
          Скрыта на мобильных (hidden), показывается на десктопе (md:block).
        */}
        <div className="hidden md:block w-px h-20 bg-white/20 shrink-0"></div>

        {/* 2. Центральная колонка (Описание + Реестр) */}
        {/* flex-1 позволяет этой колонке занять всё свободное место между линией и контактами */}
        <div className="flex-1 flex flex-col items-start text-left">
          <p className="text-base text-white max-w-md mb-3 leading-relaxed">
            Единая платформа сервисов для сопровождения процедур банкротства
          </p>
          <a 
            href="https://pd.rkn.gov.ru/operators-registry/operators-list/?id=77-25-406345" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm text-blue-200 hover:text-white transition-colors underline underline-offset-4 decoration-blue-200/50 hover:decoration-white"
          >
            Мы в реестре операторов персональных данных
          </a>
        </div>

        {/* 3. Правая колонка (Контакты) */}
        {/* На мобилках по левому краю, на десктопе прижимаем к правому краю */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right shrink-0">
          <div className="space-y-1 text-white text-base">
            <p className="text-white font-bold mb-3 text-xl">Контакты</p>
            <p className="hover:text-blue-100 transition-colors cursor-pointer font-regular">sbarbitr@yandex.ru</p>
            <p className="hover:text-blue-100 transition-colors cursor-pointer font-regular">+7 (985) 776-76-00</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;