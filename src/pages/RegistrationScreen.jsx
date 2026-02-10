/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, User, Building2, Gavel, ShieldCheck, Hammer, ArrowRight, Mail, Phone, Lock, ChevronLeft, MapPin, ClipboardList } from 'lucide-react';

export default function RegistrationScreen({ onBack, onLoginClick }) {
  const [step, setStep] = useState(1);
  const [mainRole, setMainRole] = useState(null);
  const [jurSubRole, setJurSubRole] = useState(null);
  const [inn, setInn] = useState("");
  const [gender, setGender] = useState(null);

  const isJuridical = mainRole === 'jur';
  const isArbitr = mainRole === 'arb';
  const isSRO = isJuridical && jurSubRole === 'sro';

  const getRoleInfo = () => {
    if (mainRole === 'phys') return { label: "Физическое лицо", icon: <User size={18} className="text-blue-400" /> };
    if (mainRole === 'arb') return { label: "Арбитражный управляющий", icon: <Gavel size={18} className="text-blue-400" /> };
    if (mainRole === 'jur') {
      const icon = <Building2 size={18} className="text-blue-400" />;
      if (jurSubRole === 'sro') return { label: "Саморегулируемая организация", icon: <ShieldCheck size={18} className="text-blue-400" /> };
      if (jurSubRole === 'trade') return { label: "Организатор торгов", icon: <Hammer size={18} className="text-blue-400" /> };
      return { label: "Организация", icon };
    }
    return { label: "", icon: null };
  };

  const roleInfo = getRoleInfo();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#0f0a2a] to-[#001528] flex items-center justify-center px-5 py-10 font-['Inter_Tight']"
    >
      <div className={`w-full ${step === 1 ? 'max-w-[460px]' : 'max-w-[900px]'} bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-500`}>
        
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-2 text-white font-bold text-2xl mb-2">
            Регистрация
          </div>
          <h2 className="text-white text-3xl font-black tracking-[0.05em] uppercase mb-5">SSPB ID</h2>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              /* ШАГ 1: ВЫБОР РОЛИ (оставляем без изменений) */
              <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="w-full space-y-6">
                <div className="space-y-3">
                  <label className="text-white/80 text-sm font-medium ml-1">Выберите, кем вы являетесь</label>
                  <div className="grid gap-3 ">
                    <RoleButton active={mainRole === 'phys'} onClick={() => { setMainRole('phys'); setJurSubRole(null); }} icon={User} label="Физическое лицо" />
                    <RoleButton active={mainRole === 'jur'} onClick={() => setMainRole('jur')} icon={Building2} label="Юридическое лицо" />
                    <RoleButton active={mainRole === 'arb'} onClick={() => { setMainRole('arb'); setJurSubRole(null); }} icon={Gavel} label="Арбитражный управляющий" />
                  </div>
                </div>

                <AnimatePresence>
                  {isJuridical && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-3">
                      <label className="text-white/80 text-sm font-medium ml-1">Тип юридического лица</label>
                      <div className="grid gap-3">
                        <RoleButton active={jurSubRole === 'sro'} onClick={() => setJurSubRole('sro')} icon={ShieldCheck} label="Саморегулируемая организация" isSub />
                        <RoleButton active={jurSubRole === 'trade'} onClick={() => setJurSubRole('trade')} icon={Hammer} label="Организатор торгов" isSub />
                        <RoleButton active={jurSubRole === 'org'} onClick={() => setJurSubRole('org')} icon={Building2} label="Организация" isSub />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium ml-1">ИНН</label>
                  <input
                    type="text"
                    value={inn}
                    onChange={(e) => setInn(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-blue-950/40 border text-sm border-white/10 rounded-2xl py-4 px-5 text-white focus:outline-none focus:border-cyan-500/50 transition-all shadow-inner"
                    placeholder="Введите ваш ИНН"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => mainRole && (mainRole !== 'jur' || jurSubRole) && setStep(2)}
                  className="w-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-white rounded-xl py-3.5 font-bold text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  Продолжить <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ) : (
              /* ШАГ 2: ПОЛНАЯ АНКЕТА (СРО / ЮР. ЛИЦО) */
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full space-y-6">
                
                {/* Бейдж роли с кнопкой "Изменить" */}
                <div className="flex items-center gap-4 mb-4 bg-white/5 p-3 rounded-2xl border border-white/10 w-fit">
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium px-2">
                    {roleInfo.icon}
                    {roleInfo.label}
                    </div>
                    <button 
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 text-xs py-1.5 px-3 rounded-xl transition-all border border-blue-400/20"
                    >
                    <ChevronLeft size={14} /> Изменить
                    </button>
                </div>

                {/* Блок основных реквизитов */}
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-2"><InputGroup label="Email" placeholder="example@mail.ru" /></div>
                    <div className="md:col-span-2"><InputGroup label="ИНН" value={inn} placeholder="1234567890"/></div>
                    
                    {isArbitr && <div className="md:col-span-4"><InputGroup label="ОГРНИП" placeholder="123456789012345"/></div>}

                    {isJuridical && (
                    <>
                        <div className="md:col-span-2"><InputGroup label="ОГРН" placeholder="1027700132195" /></div>
                        <div className="md:col-span-2"><InputGroup label="КПП" placeholder="770101001" /></div>
                        <div className="md:col-span-4"><InputGroup label="Полное наименование" placeholder="Наименование организации" /></div>
                        <div className="md:col-span-4"><InputGroup label="Сокращенное наименование" placeholder="Сокр. наименование" /></div>
                        <div className="md:col-span-4"><InputGroup label="Юридический адрес" placeholder="Адрес организации" /></div>
                    </>
                    )}
                </div>

                {/* БЛОК ПЕРСОНАЛЬНЫХ ДАННЫХ */}
                <div className="pt-4 mt-2 border-t border-white/10">
                    {/* УСЛОВИЕ: Показываем заголовок только для Юридических лиц */}
                    {isJuridical && (
                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4">
                        Данные руководителя
                    </h3>
                    )}
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <InputGroup label="Фамилия" placeholder="Иванов" />
                    <InputGroup label="Имя" placeholder="Иван" />
                    <InputGroup label="Отчество" placeholder="Иванович" />

                    {/* Специфические поля для Арбитражного управляющего */}
                    {isArbitr && (
                        <>
                        <InputGroup label="Номер в Реестре АУ" placeholder="12345" />
                        <div className="md:col-span-2">
                            <InputGroup label="Членство в СРО" placeholder="Наименование СРО" />
                        </div>
                        <div className="md:col-span-3">
                            <InputGroup label="Адрес регистрации" placeholder="Адрес для корреспонденции" />
                        </div>
                        </>
                    )}

                    <InputGroup label="Телефон" placeholder="+7 (999) 000-00-00" />
                    {isJuridical && <InputGroup label="Email руководителя" placeholder="director@mail.ru" />}
                    
                    <div className="space-y-3">
                        <label className="text-white/80 text-sm font-medium ml-1">Пол</label>
                        <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="gender" className="hidden" onChange={() => setGender('male')} />
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${gender === 'male' ? 'border-blue-400' : 'border-white/20'}`}>
                                {gender === 'male' && <div className="w-2 h-2 bg-blue-400 rounded-full" />}
                            </div>
                            <span className="text-white/70 text-sm">Мужской</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="gender" className="hidden" onChange={() => setGender('female')} />
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${gender === 'female' ? 'border-blue-400' : 'border-white/20'}`}>
                                {gender === 'female' && <div className="w-2 h-2 bg-blue-400 rounded-full" />}
                            </div>
                            <span className="text-white/70 text-sm">Женский</span>
                        </label>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Остальные поля: Пароль, Согласие... */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 text-sm border-t border-white/10">
                    <InputGroup label="Пароль" type="password" placeholder="••••••••" />
                    <InputGroup label="Подтверждение пароля" type="password" placeholder="••••••••" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group py-2">
                    <input type="checkbox" className="mt-1 accent-blue-500" />
                    <span className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    Даю согласие на передачу моих данных в продуктах экосистемы
                    </span>
                </label>

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-white rounded-xl py-3.5 font-bold text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-lg mt-2"
                >
                    Зарегистрироваться
                </motion.button>
                </motion.div>
            )}
          </AnimatePresence>

          <div className="text-sm mt-8 text-center gap-4 w-full">
            <button onClick={onBack} className="text-white/60 hover:text-white text-sm transition block w-full">
              ← На главную
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InputGroup({ label, placeholder, type = "text", value, readOnly }) {
  return (
    <div className="space-y-1">
      <label className="text-white/70 text-sm font-medium ml-1">{label}</label>
      <input
        type={type}
        defaultValue={value}
        readOnly={readOnly}
        className={`w-full bg-blue-950/30 border border-white/10 rounded-xl py-3.5 px-5 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
        placeholder={placeholder}
      />
    </div>
  );
}

function RoleButton({ icon: Icon, label, active, onClick, isSub = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${active ? 'bg-blue-600/30 border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}
    >
      <div className={`${active ? 'text-blue-300' : 'text-white/60'}`}><Icon size={isSub ? 18 : 22} /></div>
      <span className={`text-sm font-medium ${active ? 'text-white' : 'text-white/80'}`}>{label}</span>
    </button>
  );
}