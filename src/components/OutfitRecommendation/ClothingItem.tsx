import React, { useState } from 'react';
import { ClothingItem as ClothingItemType } from './types';
import ProductDetail from './ProductDetail';

interface ClothingItemProps {
  item: ClothingItemType;
  isLiked: boolean;
  onToggleLike: (item: ClothingItemType) => void;
}

const ClothingItem: React.FC<ClothingItemProps> = ({ item, isLiked, onToggleLike }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div 
        className="bg-neutral-50 rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        <div className="aspect-square mb-3 overflow-hidden rounded-md bg-white">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-contain" 
          />
        </div>
        <div>
          <h4 className="font-medium text-neutral-900 mb-1">{item.name}</h4>
          <p className="text-sm text-neutral-500 capitalize">{item.category}</p>
          <p className="text-sm font-medium text-neutral-900 mt-2">
            {/* ₹{item.price.toFixed(2)} */}
          </p>
        </div>
      </div>

      {showDetail && (
        <ProductDetail 
          item={item}
          isLiked={isLiked}
          onToggleLike={onToggleLike}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

export default ClothingItem;
