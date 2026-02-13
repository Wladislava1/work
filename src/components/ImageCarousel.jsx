import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, variant = 'default', fit = 'cover' }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const SWIPE_CONFIDENCE_THRESHOLD = 10000;

  if (!images || images.length === 0) return null;

  // Если вариант компактный (для Главной), убираем внешние отступы my-12
  const containerClasses = variant === 'compact' 
    ? "w-full" 
    : "w-full max-w-6xl mx-auto px-4 my-12";

  // Если компактный - отступы внутри чуть меньше, чтобы влезло в колонку
  const innerClasses = variant === 'compact'
    ? "bg-white rounded-[40px] shadow-soft p-3 relative border border-white/50"
    : "bg-white rounded-[40px] shadow-soft md:p-10 p-4 relative border border-white/50";

  return (
    <div className={containerClasses}>
      <div className={innerClasses}>
        <div className="flex items-center justify-between gap-4">
          
          {/* Левая внешняя кнопка (Скрываем, если compact) */}
          {variant !== 'compact' && (
            <button
              onClick={() => paginate(-1)}
              className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-[#c0dcf7] text-[#00396a] hover:bg-primary transition-colors shadow-lg z-10"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
                    paginate(1);
                  } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
                    paginate(-1);
                  }
                }}
                className={`absolute w-full h-full object-${fit} bg-gray-50`}
                alt="Слайд интерфейса"
              />
            </AnimatePresence>
            
            {/* Стрелки ПОВЕРХ изображения */}
            {/* Показываем:
                1. На мобильных (всегда)
                2. На десктопе, ЕСЛИ variant === 'compact'
            */}
            <div className={`absolute inset-0 flex items-center justify-between  shadow-xl pointer-events-none ${variant === 'compact' ? 'flex' : 'md:hidden'}`}>
                <button onClick={() => paginate(-1)} className="pointer-events-auto p-3 bg-[#c0dcf7] hover:bg-primary text-[#00396a] rounded-full backdrop-blur-sm shadow-lg transition-colors z-30">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={() => paginate(1)} className="pointer-events-auto p-3 bg-[#c0dcf7] hover:bg-primary text-[#00396a] rounded-full backdrop-blur-sm shadow-lg transition-colors z-30">
                   <ChevronRight size={20} />
                </button>
            </div>
          </div>

          {/* Правая внешняя кнопка (Скрываем, если compact) */}
          {variant !== 'compact' && (
            <button
              onClick={() => paginate(1)}
              className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-[#c0dcf7] text-[#00396a] hover:bg-primary transition-colors shadow-lg z-30"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;