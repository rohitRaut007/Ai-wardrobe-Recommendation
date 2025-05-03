import React, { useState } from 'react';
import OutfitCard from './OutfitCard';
import NavigationControls from './NavigationControls';
import { Outfit, ClothingItem } from './types';

interface OutfitCarouselProps {
  outfits: Outfit[];
  onToggleLike: (outfit: Outfit) => void;
  isLiked: (id: number) => boolean;
}

const OutfitCarousel: React.FC<OutfitCarouselProps> = ({
  outfits,
  onToggleLike,
  isLiked
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleItemLike = (item: ClothingItem) => {
    setLikedItems(prev => ({
      ...prev,
      [item.id]: !prev[item.id]
    }));
  };

  const goToNextOutfit = () => {
    if (transitioning) return;

    setDirection('right');
    setTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % outfits.length);
      setTransitioning(false);
    }, 300);
  };

  const goToPreviousOutfit = () => {
    if (transitioning) return;

    setDirection('left');
    setTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + outfits.length) % outfits.length);
      setTransitioning(false);
    }, 300);
  };

  const getSlideClassName = () => {
    let className = "transition-transform duration-300 ease-in-out";

    if (transitioning) {
      if (direction === 'right') {
        className += " -translate-x-4 opacity-0";
      } else if (direction === 'left') {
        className += " translate-x-4 opacity-0";
      }
    } else {
      className += " translate-x-0 opacity-100";
    }

    return className;
  };

  const currentOutfit = outfits[currentIndex];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className={getSlideClassName()}>
          <OutfitCard
            outfit={currentOutfit}
            onToggleLike={() => onToggleLike(currentOutfit)}
            isLiked={isLiked(currentOutfit.id)}
            likedItems={likedItems}
            onToggleItemLike={toggleItemLike}
          />
        </div>
      </div>

      <NavigationControls
        currentIndex={currentIndex}
        totalOutfits={outfits.length}
        onPrevious={goToPreviousOutfit}
        onNext={goToNextOutfit}
      />
    </div>
  );
};

export default OutfitCarousel;
