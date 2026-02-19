import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarouselMobile = ({ images }) => {
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

  const SWIPE_CONFIDENCE_THRESHOLD = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full px-0 my-6">
      <div className="bg-white rounded-[32px] shadow-soft py-3 border border-white/50 relative">
        
        {/* Контейнер изображения (Высота чуть меньше, чем на десктопе, но достаточная) */}
        <div className="relative w-full h-[280px] rounded-4xl overflow-hidden shadow-inner bg-gray-50">
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
              // ВАЖНО: object-contain гарантирует, что весь интерфейс влезет в экран
              className="absolute w-full h-full object-contain bg-gray-50"
              alt="Слайд интерфейса"
            />
          </AnimatePresence>

          {/* Кнопки навигации ПОВЕРХ картинки (для экономии места) */}
         
        </div>
        
        {/* Индикатор текущего слайда (точки) */}
        <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-colors ${idx === imageIndex ? 'bg-[#00396a]' : 'bg-gray-300'}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselMobile;