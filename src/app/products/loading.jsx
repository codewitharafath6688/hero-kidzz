import ProductCardSkeleton from '@/components/Sekeleton/ProductCartSekeleton';
import React from 'react';

const loading = () => {
  return (
    <div className='grid md:grid-cols-3 gap-5'>
      {Array.from({ length: 9 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;