import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarouselDesktop = ({ images, variant = 'default' }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const SWIPE_CONFIDENCE_THRESHOLD = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  if (!images || images.length === 0) return null;

  const isProduct = variant === 'product';
  const imageFit = isProduct ? 'object-contain' : 'object-cover';
  // 1. Уменьшили высоту изображения для продукта до 400px
  const imageHeight = isProduct ? 'h-[450px]' : 'h-[400px]';

  // 2. Уплотнили внешние отступы (my-6) для варианта product
  const containerClasses =
    variant === 'compact'
      ? 'w-full'
      : variant === 'product'
      ? 'w-full max-w-5xl mx-auto px-4 my-6'
      : 'w-full max-w-6xl mx-auto px-4 my-12';

  // 3. Уменьшили внутренний отступ рамки (p-6) для варианта product
  const innerClasses =
    variant === 'compact'
      ? 'bg-white rounded-[40px] shadow-soft p-3 relative border border-white/50'
      : variant === 'product'
      ? 'bg-white rounded-[40px] shadow-soft p-6 relative border border-white/50'
      : 'bg-white rounded-[40px] shadow-soft p-10 relative border border-white/50';

  return (
    <div className={containerClasses}>
      <div className={innerClasses}>
        <div className={`relative rounded-2xl overflow-hidden shadow-inner bg-gray-50 w-full ${imageHeight}`}>
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) paginate(1);
                else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) paginate(-1);
              }}
              className={`absolute inset-0 w-full h-full ${imageFit} object-center`}
              alt="Слайд интерфейса"
            />
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="
              absolute left-2 top-1/2 -translate-y-1/2
              flex items-center justify-center
              w-12 h-12 rounded-full
              bg-[#c0dcf7]/50 backdrop-blur-sm
              text-[#00396a] hover:bg-[#00396a]/50 hover:text-white
              transition-all duration-200 shadow-lg
              z-20 hover:scale-110
            "
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              flex items-center justify-center
              w-12 h-12 rounded-full
              bg-[#c0dcf7]/50 backdrop-blur-sm
              text-[#00396a] hover:bg-[#00396a]/50 hover:text-white
              transition-all duration-200 shadow-lg
              z-20 hover:scale-110
            "
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselDesktop;