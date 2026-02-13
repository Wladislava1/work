import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import ImageCarouselDesktop from './ImageCarouselDesktop';
import ImageCarouselMobile from './ImageCarouselMobile';

const ImageCarousel = (props) => {
  const isMobile = useIsMobile(1024);

  return isMobile ? (
    <ImageCarouselMobile {...props} />
  ) : (
    <ImageCarouselDesktop {...props} />
  );
};

export default ImageCarousel;