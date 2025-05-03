import React from 'react';
import { X } from 'lucide-react';
import { ClothingItem } from './types';
import LikeButton from './LikeButton';

interface ProductDetailProps {
  item: ClothingItem;
  onClose: () => void;
  isLiked: boolean;
  onToggleLike: (item: ClothingItem) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  item,
  onClose,
  isLiked,
  onToggleLike,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-neutral-900">{item.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Close detail view"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-neutral-50">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-2xl font-bold text-neutral-900">
                ₹{item.price.toFixed(2)}
              </p>
              <p className="text-neutral-600">{item.brand}</p>
            </div>
            <LikeButton isLiked={isLiked} onClick={() => onToggleLike(item)} />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Description</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-neutral-900 mb-1">Category</h3>
                <p className="text-neutral-600 capitalize">{item.category}</p>
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 mb-1">Color</h3>
                <p className="text-neutral-600">{item.color}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
