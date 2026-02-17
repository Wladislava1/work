/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building2, Gavel, ShieldCheck, Hammer, ArrowRight, ChevronLeft } from 'lucide-react';

export default function RegistrationScreen({ onBack, onLoginClick }) {
  const [step, setStep] = useState(1);
  const [mainRole, setMainRole] = useState(null);
  const [jurSubRole, setJurSubRole] = useState(null);
  const [inn, setInn] = useState("");
  const [gender, setGender] = useState(null);

  const isJuridical = mainRole === 'jur';
  const isArbitr = mainRole === 'arb';

  const getRoleInfo = () => {
    if (mainRole === 'phys') return { label: "Физическое лицо", icon: <User size={18} /> };
    if (mainRole === 'arb') return { label: "Арбитражный управляющий", icon: <Gavel size={18} /> };
    if (mainRole === 'jur') {
      if (jurSubRole === 'sro') return { label: "СРО", icon: <ShieldCheck size={18} /> };
      if (jurSubRole === 'trade') return { label: "Организатор торгов", icon: <Hammer size={18} /> };
      return { label: "Организация", icon: <Building2 size={18} /> };
    }
    return { label: "", icon: null };
  };

  const roleInfo = getRoleInfo();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="min-h-screen bg-gradient-to-br from-[#56b1ff] to-[#00396a] bg-fixed flex items-center justify-center px-5 py-10 font-manrope"
    >
      <div className={`w-full ${step === 1 ? 'max-w-[460px]' : 'max-w-[900px]'} 
        bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[40px] 
        p-8 md:p-10 shadow-2xl relative transition-all duration-500 mb-16`}>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-2 text-white font-bold text-3xl mb-10">
            Регистрация в SSPB ID
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="w-full space-y-6">
                <div className="space-y-3">
                  <label className="text-white font-medium ml-1">Выберите тип аккаунта</label>
                  <div className="grid gap-3">
                    <RoleButton active={mainRole === 'phys'} onClick={() => { setMainRole('phys'); setJurSubRole(null); }} icon={User} label="Физическое лицо" />
                    <RoleButton active={mainRole === 'jur'} onClick={() => setMainRole('jur')} icon={Building2} label="Юридическое лицо" />
                    <RoleButton active={mainRole === 'arb'} onClick={() => { setMainRole('arb'); setJurSubRole(null); }} icon={Gavel} label="Арбитражный управляющий" />
                  </div>
                </div>

                {isJuridical && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="space-y-3">
                    <label className="text-white font-medium ml-1">Тип оюридического лица</label>
                    <div className="grid gap-3">
                      <RoleButton active={jurSubRole === 'sro'} onClick={() => setJurSubRole('sro')} icon={ShieldCheck} label="СРО" isSub />
                      <RoleButton active={jurSubRole === 'trade'} onClick={() => setJurSubRole('trade')} icon={Hammer} label="Организатор торгов" isSub />
                      <RoleButton active={jurSubRole === 'org'} onClick={() => setJurSubRole('org')} icon={Building2} label="Организация" isSub />
                    </div>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="text-white font-medium ml-1">ИНН</label>
                  <input
                    type="text"
                    value={inn}
                    onChange={(e) => setInn(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-[#00396a]/40 border border-white/20 rounded-2xl py-4 px-5 text-white focus:outline-none focus:border-white transition-all shadow-inner"
                    placeholder="Введите ваш ИНН"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => mainRole && (mainRole !== 'jur' || jurSubRole) && setStep(2)}
                  className="w-full bg-white text-[#00396a] rounded-xl py-4 font-bold text-sm uppercase flex items-center justify-center gap-2 shadow-lg"
                >
                  Продолжить <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full space-y-6">
                <div className="flex items-center gap-4 mb-4 bg-white/5 p-2 rounded-xl border border-white/30 w-fit">
                    <div className="flex items-center gap-2 text-white text-sm font-bold px-2">
                      {roleInfo.icon} {roleInfo.label}
                    </div>
                    <button onClick={() => setStep(1)} className="bg-[#00396a]/60 hover:bg-white/40 text-white text-xs py-1 px-3 rounded-md transition-all">
                      Изменить
                    </button>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-2"><InputGroup label="Email" placeholder="example@mail.ru" /></div>
                    <div className="md:col-span-2"><InputGroup label="ИНН" value={inn} readOnly /></div>
                    {isJuridical && (
                      <>
                        <div className="md:col-span-2"><InputGroup label="ОГРН" placeholder="10277..." /></div>
                        <div className="md:col-span-2"><InputGroup label="КПП" placeholder="7701..." /></div>
                        <div className="md:col-span-4"><InputGroup label="Полное наименование" placeholder="ООО..." /></div>
                      </>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <InputGroup label="Фамилия" placeholder="Иванов" />
                    <InputGroup label="Имя" placeholder="Иван" />
                    <InputGroup label="Отчество" placeholder="Иванович" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <InputGroup label="Пароль" type="password" placeholder="••••••••" />
                    <InputGroup label="Подтверждение" type="password" placeholder="••••••••" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-white text-[#00396a] rounded-xl py-4 font-bold text-sm uppercase shadow-lg"
                >
                    Зарегистрироваться
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={onBack} className="mt-8 text-white/60 hover:text-white text-sm transition block w-full">
             ← На главную
          </button>
        </div>
        <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase whitespace-nowrap tracking-wider">
            Защищено SSPB ID © 2026
        </div>
      </div>
    </motion.div>
  );
}

function InputGroup({ label, placeholder, type = "text", value, readOnly }) {
  return (
    <div className="space-y-1">
      <label className="text-white font-medium ml-1 text-xs tracking-wider opacity-70">{label}</label>
      <input
        type={type}
        defaultValue={value}
        readOnly={readOnly}
        className={`w-full bg-[#00396a]/40 border border-white/20 rounded-xl py-3 px-5 text-white text-sm focus:outline-none focus:border-white transition-all shadow-inner ${readOnly ? 'opacity-50' : ''}`}
        placeholder={placeholder}
      />
    </div>
  );
}

function RoleButton({ icon: Icon, label, active, onClick, isSub = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border transition-all duration-300 ${active ? 'bg-white text-[#00396a] border-white shadow-xl' : 'bg-[#00396a]/30 border-white/10 text-white hover:bg-white/10'}`}
    >
      <div className={`${active ? 'text-[#00396a]' : 'text-white/60'}`}><Icon size={isSub ? 18 : 22} /></div>
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}