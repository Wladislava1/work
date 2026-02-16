import React, { useState } from 'react';
import { X } from 'lucide-react'; 
import Logo from './Logo';

const Footer = () => {
  const [showRequisites, setShowRequisites] = useState(false);

  const requisites = {
    fullName: 'Акционерное общество "ССПБ"',
    shortName: 'АО "ССПБ"',
    inn: '9701151149',
    kpp: '770101001',
    ogrn: '1197446727012',
    account: '40702810402680003363',
    bank: 'АО "АЛЬФА-БАНК"',
    bik: '044525593',
    corrAccount: '30101810200000000593'
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-[#00396a] to-[#1976d2] text-white py-8 mt-20">
        
        {/* Основной контент: 3 колонки */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Левая колонка (Лого + Описание + Реестры) */}
          <div className="flex flex-col items-start text-left">
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="mt-4 text-white text-base max-w-sm">
              Единая экосистема для арбитражных управляющих.
            </p>
            
            {/* Ссылки на реестры (Аккуратные текстовые ссылки) */}
            <div className="mt-6 flex flex-col gap-2">
              <a 
                href="https://pd.rkn.gov.ru/operators-registry/operators-list/?id=77-20-017830" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-blue-200 hover:text-white transition-colors"
              >
                Мы в реестре аккредитованных ИТ-компаний
              </a>
              <a 
                href="https://pd.rkn.gov.ru/operators-registry/operators-list/" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-blue-200 hover:text-white transition-colors"
              >
                Мы в реестре операторов персональных данных
              </a>
            </div>
          </div>

          {/* 2. Центральная колонка (Продукты) */}
          <div className="flex flex-col md:items-center md:text-center">
            <h4 className="font-bold mb-3 text-xl">Продукты</h4>
            <ul className="space-y-2 text-blue-100 text-base">
              <li><a href="/sb-arbitr" className="hover:text-white transition-colors">СБ Арбитр</a></li>
              <li><a href="/ai-referent" className="hover:text-white transition-colors">AI Referent</a></li>
              <li><a href="/au-publicator" className="hover:text-white transition-colors">АУ-Публикатор</a></li>
            </ul>
          </div>

          {/* 3. Правая колонка (Контакты) */}
          <div className="flex flex-col md:items-end md:text-right">
            <h4 className="font-bold mb-3 text-xl">Контакты</h4>
            <div className="space-y-1 text-white text-base">
              <p>sbarbitr@yandex.ru</p>
              <p>+7 (985) 776-76-00</p>
            </div>
          </div>
        </div>

        {/* Нижняя полоса (Копирайт строго по центру) */}
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/20 flex justify-center text-sm text-blue-200">
          <div className="text-center">© СБ Арбитр 2018-2026. Все права защищены</div>
        </div>
      </footer>

      {/* Модальное окно Реквизиты */}
      {showRequisites && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden">
            
            {/* Шапка */}
            <div className="bg-[#00396a] p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Реквизиты организации</h3>
              <button onClick={() => setShowRequisites(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={28} />
              </button>
            </div>

            {/* Контент */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh] text-gray-800">
              
              {/* Юридическая информация */}
              <div className="mb-8">
                <h4 className="text-[#1976d2] font-bold text-xl mb-4 border-b pb-2">Юридическая информация</h4>
                <div className="grid gap-5">
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Полное наименование:</span>
                    <span className="md:col-span-2 text-gray-900 select-all">{requisites.fullName}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Сокращенное наименование:</span>
                    <span className="md:col-span-2 text-gray-900 select-all">{requisites.shortName}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-600 font-bold text-sm mb-1">ИНН</span>
                      <span className="font-mono text-gray-900 select-all text-base">{requisites.inn}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-600 font-bold text-sm mb-1">КПП</span>
                      <span className="font-mono text-gray-900 select-all text-base">{requisites.kpp}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-600 font-bold text-sm mb-1">ОГРН</span>
                      <span className="font-mono text-gray-900 select-all text-base">{requisites.ogrn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Банковские реквизиты */}
              <div>
                <h4 className="text-[#1976d2] font-bold text-xl mb-4 border-b pb-2">Расчетный счет</h4>
                <div className="grid gap-5">
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4 items-center">
                    <span className="text-gray-700 font-bold">Номер счета:</span>
                    <span className="md:col-span-2 text-gray-900 select-all">
                      {requisites.account}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Банк:</span>
                    <span className="md:col-span-2 text-gray-900 select-all">{requisites.bank}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">БИК:</span>
                    <span className="md:col-span-2 font-mono text-gray-900 select-all">{requisites.bik}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Корр. счет:</span>
                    <span className="md:col-span-2 font-mono text-gray-900 select-all">{requisites.corrAccount}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;