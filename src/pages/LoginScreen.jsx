/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

export default function LoginScreen({ onBack, onRegisterClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-[#56b1ff] to-[#00396a] bg-fixed flex items-center justify-center px-5 font-manrope"
    >
      <div className="w-full max-w-[420px] bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Декоративные блики */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00396a]/20 rounded-full blur-3xl" />

        <div className="relative flex flex-col items-center">
          <h2 className="text-white text-3xl font-bold uppercase mb-1">SSPB ID</h2>
          <p className="text-white/90 text-lg font-medium mb-1 tracking-wide">Добро пожаловать</p>
          <p className="text-white/60 text-sm mb-8 text-center max-w-[280px]">
            Введите учетные данные для доступа
          </p>

          <form className="w-full space-y-5">
            {/* Логин */}
            <div className="space-y-1.5">
              <label className="text-white font-medium text-sm ml-1">Логин или Email</label>
              <input
                type="text"
                className="w-full bg-[#00396a]/40 border border-white/20 rounded-xl py-3.5 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-white focus:bg-[#00396a]/60 transition-all text-sm shadow-inner"
                placeholder="example@sspb.ru"
              />
            </div>

            {/* Пароль */}
            <div>
              <div className="flex justify-between items-center px-1 mb-1.5">
                <label className="text-white font-medium text-sm">Пароль</label>
                <button type="button" className="text-white/60 hover:text-white text-xs transition underline underline-offset-4">
                  Забыли пароль?
                </button>
              </div>
              <input
                type="password"
                className="w-full bg-[#00396a]/40 border border-white/20 rounded-xl py-3.5 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-white focus:bg-[#00396a]/60 transition-all text-sm shadow-inner"
                placeholder="••••••••"
              />
            </div>

            {/* Кнопка входа */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-[#00396a] rounded-xl py-4 font-bold text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-lg mt-2"
            >
              <LogIn size={18}/>
              Войти в систему
            </motion.button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-white/70 text-sm">
              Нет аккаунта?{' '}
              <button 
                onClick={onRegisterClick}
                className="text-white font-bold hover:text-[#56b1ff] transition-colors"
              >
                Зарегистрироваться
              </button>
            </p>

            <button
              onClick={onBack}
              className="text-white/60 hover:text-white text-sm transition block w-full"
            >
              ← На главную
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase whitespace-nowrap">
        Защищено SSPB ID © 2026
      </div>
    </motion.div>
  );
}