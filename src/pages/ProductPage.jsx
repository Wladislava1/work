import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import ProductPageDesktop from './ProductPageDesktop';
import ProductPageMobile from './ProductPageMobile';

const ProductPage = () => {
    const isMobile = useIsMobile(1024);

    return isMobile ? <ProductPageMobile /> : <ProductPageDesktop />;
};

export default ProductPage;