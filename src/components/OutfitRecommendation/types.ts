export interface ClothingItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  brand: string;
  color: string;
}

export interface Outfit {
  id: number;
  name: string;
  description: string;
  season: string;
  image: string;
  items: ClothingItem[];
}