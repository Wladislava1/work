import React, { useState } from 'react';
import { X } from 'lucide-react'; // Копию убрали, оставили только X
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
      <footer className="bg-gradient-to-b from-[#00396a] to-[#1976d2] items-center text-white py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="mt-4 text-white text-base"> {/* text-base */}
              Единая экосистема для арбитражных управляющих.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-xl">Продукты</h4> {/* text-xl */}
            <ul className="space-y-3 text-blue-100 text-base"> {/* text-base */}
              <li><a href="/sb-arbitr" className="hover:text-white transition-colors">СБ Арбитр</a></li>
              <li><a href="/ai-referent" className="hover:text-white transition-colors">AI Referent</a></li>
              <li><a href="/au-publicator" className="hover:text-white transition-colors">АУ-Публикатор</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 text-xl">Контакты</h4> {/* text-xl */}
            <div className="space-y-2 text-white text-base"> {/* text-base */}
              <p>support@sspb.ru</p>
              <p>+7 (495) 000-00-00</p>
              <p className=" mt-4">105082, г. Москва, Балакиревский пер., д.19, офис 109 </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-6 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white"> {/* text-sm */}
          <div>© 2026 АО «ССПБ». Все права защищены.</div>
          <button 
            onClick={() => setShowRequisites(true)} 
            className="hover:text-white border-b border-dashed border-blue-300 hover:border-white transition-colors pb-0.5 text-base"
          >
            Реквизиты компании
          </button>
        </div>
      </footer>

      {showRequisites && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden">
            
            {/* Шапка — только крестик, без кнопки закрыть внизу */}
            <div className="bg-[#00396a] p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Реквизиты организации</h3> {/* text-2xl */}
              <button onClick={() => setShowRequisites(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={28} /> {/* размер 28 */}
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh] text-gray-800">
              
              {/* Юридическая информация */}
              <div className="mb-8">
                <h4 className="text-[#1976d2] font-bold text-xl mb-4 border-b pb-2">Юридическая информация</h4> {/* text-xl */}
                <div className="grid gap-5"> {/* gap-5 */}
                  
                  {/* Полное наименование — поле жирнее */}
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Полное наименование:</span> {/* font-bold */}
                    <span className="md:col-span-2 text-gray-900 select-all">{requisites.fullName}</span>
                  </div>
                  
                  {/* Сокращенное наименование — поле жирнее */}
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Сокращенное наименование:</span> {/* font-bold */}
                    <span className="md:col-span-2 text-gray-900 select-all">{requisites.shortName}</span>
                  </div>
                  
                  {/* Карточки ИНН/КПП/ОГРН */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div className="bg-gray-50 p-4 rounded-xl"> {/* p-4 */}
                      <span className="block text-gray-600 font-bold text-sm mb-1">ИНН</span> {/* font-bold */}
                      <span className="font-mono text-gray-900 select-all text-base">{requisites.inn}</span> {/* text-base */}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-600 font-bold text-sm mb-1">КПП</span> {/* font-bold */}
                      <span className="font-mono text-gray-900 select-all text-base">{requisites.kpp}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-600 font-bold text-sm mb-1">ОГРН</span> {/* font-bold */}
                      <span className="font-mono text-gray-900 select-all text-base">{requisites.ogrn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Банковские реквизиты */}
              <div>
                <h4 className="text-[#1976d2] font-bold text-xl mb-4 border-b pb-2">Расчетный счет</h4> {/* text-xl */}
                <div className="grid gap-5"> {/* gap-5 */}
                  
                  {/* Номер счета — поле жирнее, выделенный фон */}
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4 items-center">
                    <span className="text-gray-700 font-bold">Номер счета:</span> {/* font-bold */}
                    <span className="md:col-span-2 text-gray-900 select-all">
                      {requisites.account}
                    </span>
                  </div>
                  
                  {/* Банк — поле жирнее */}
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Банк:</span> {/* font-bold */}
                    <span className="md:col-span-2 text-gray-900 select-all">{requisites.bank}</span>
                  </div>
                  
                  {/* БИК — поле жирнее */}
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">БИК:</span> {/* font-bold */}
                    <span className="md:col-span-2 font-mono text-gray-900 select-all">{requisites.bik}</span>
                  </div>
                  
                  {/* Корр. счет — поле жирнее */}
                  <div className="grid md:grid-cols-3 gap-1 md:gap-4">
                    <span className="text-gray-700 font-bold">Корр. счет:</span> {/* font-bold */}
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