import React, { useState } from 'react';
import OutfitCarousel from './OutfitCarousel';
import { outfitData } from './data';
import { Outfit } from './types';
import { Heart } from 'lucide-react';

const OutfitRecommendation: React.FC = () => {
  const [wishlist, setWishlist] = useState<Outfit[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleWishlistItem = (outfit: Outfit) => {
    const exists = wishlist.find((item) => item.id === outfit.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== outfit.id));
    } else {
      setWishlist([...wishlist, outfit]);
    }
  };

  const isWishlisted = (id: number) => wishlist.some((item) => item.id === id);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Wishlist Toggle Button */}
      <button
        className="absolute right-4 top-4 bg-white p-2 rounded-full shadow hover:bg-neutral-100 transition z-20"
        onClick={() => setShowWishlist((prev) => !prev)}
        title="View Wishlist"
      >
        <Heart
          className={`h-6 w-6 ${wishlist.length > 0 ? 'text-red-500 fill-red-500' : 'text-gray-500'}`}
        />
      </button>

      {/* Header */}
      <header className="text-center mt-8 sm:mt-12 mb-8 animate-fade-in">
  <h1 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text font-extrabold text-neutral-800 tracking-tight mb-3">
    Today's Recommendations
  </h1>
  <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
    Curated outfits tailored to your unique style, powered by trends and smart suggestions.
  </p>
</header>

      {/* Outfit Carousel */}
      <div className="flex-grow w-full max-w-5xl flex items-center justify-center">
        <OutfitCarousel
          outfits={outfitData}
          onToggleLike={toggleWishlistItem}
          isLiked={isWishlisted}
        />
      </div>

      {/* Wishlist Drawer */}
      {showWishlist && (
        <div className="absolute top-20 right-4 w-72 sm:w-80 bg-white shadow-xl border rounded-lg max-h-[70vh] overflow-y-auto z-30 p-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Wishlist</h2>
          {wishlist.length === 0 ? (
            <p className="text-sm text-gray-500">No outfits saved yet.</p>
          ) : (
            <ul className="space-y-3">
              {wishlist.map((item) => (
                <li key={item.id} className="flex items-start gap-3 border-b pb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <button
                      onClick={() => toggleWishlistItem(item)}
                      className="text-xs text-red-500 mt-1 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default OutfitRecommendation;
