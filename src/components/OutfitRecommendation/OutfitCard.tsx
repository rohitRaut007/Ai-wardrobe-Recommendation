import React from 'react';
import ClothingItem from './ClothingItem';
import LikeButton from './LikeButton';
import { Outfit, ClothingItem as ClothingItemType } from './types';

interface OutfitCardProps {
  outfit: Outfit;
  isLiked: boolean;
  onToggleLike: (outfit: Outfit) => void;
  likedItems: Record<string, boolean>;
  onToggleItemLike: (item: ClothingItemType) => void;
}

const OutfitCard: React.FC<OutfitCardProps> = ({
  outfit,
  isLiked,
  onToggleLike,
  likedItems,
  onToggleItemLike,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="p-6 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-neutral-900">{outfit.name}</h2>
          <LikeButton isLiked={isLiked} onClick={() => onToggleLike(outfit)} />
        </div>
        <p className="text-neutral-600 mb-4">{outfit.description}</p>
      </div>

      <div className="relative aspect-[4/3] md:aspect-[25/9] mb-6">
        <img 
          src={outfit.image} 
          alt={outfit.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {outfit.season}
          </span>
        </div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Included Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outfit.items.map((item, index) => (
            <ClothingItem
              key={index}
              item={item}
              isLiked={likedItems[item.id]}
              onToggleLike={onToggleItemLike}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
