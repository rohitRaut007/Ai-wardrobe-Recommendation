import React from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
        isLiked 
          ? 'bg-rose-100 text-rose-500 hover:bg-rose-200' 
          : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'
      }`}
      aria-label={isLiked ? "Unlike outfit" : "Like outfit"}
    >
      <Heart 
        size={20} 
        className={`transition-all duration-300 ${
          isLiked ? 'fill-rose-500 scale-110' : 'fill-transparent scale-100'
        }`} 
      />
    </button>
  );
};

export default LikeButton;