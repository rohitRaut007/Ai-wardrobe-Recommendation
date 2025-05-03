import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  currentIndex: number;
  totalOutfits: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalOutfits,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button 
        onClick={onPrevious}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
        aria-label="Previous outfit"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalOutfits }).map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full ${
              index === currentIndex 
                ? 'bg-neutral-800 w-4' 
                : 'bg-neutral-300'
            } transition-all duration-200`}
          />
        ))}
      </div>
      
      <button 
        onClick={onNext}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
        aria-label="Next outfit"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default NavigationControls;