import { Outfit } from './types';
import blazer from '../../assets/blazer.jpg';
import brougues from '../../assets/brown brogues.jpg';
import chinos from '../../assets/chinos.jpg'
import chealsee from '../../assets/chealses boots.jpg';
import demin_jac from '../../assets/demin jacket.jpg';
import shirts from '../../assets/shirts.jpg';
import sneakers from '../../assets/sneakers.jpg';
import t_shirts from '../../assets/white t shirt.jpg';

export const outfitData: Outfit[] = [
  {
    id: 1,
    name: "Summer Casual",
    description: "A light and breezy outfit perfect for warm summer days.",
    season: "Summer",
    image: t_shirts,
    items: [
      {
        id: 101,
        name: "Linen Shirt",
        category: "top",
        image: shirts,
        description: "Breathable pure linen shirt in classic white",
        price: 1899.99,
        brand: "Summer Essentials",
        color: "White"
      },
      {
        id: 102,
        name: "Denim jacket",
        category: "bottom",
        image: demin_jac, // Assuming this represents denim/chino shorts — update if not accurate
        description: "Comfortable cotton chino shorts",
        price: 5999.99,
        brand: "Urban Comfort",
        color: "Beige"
      },
      {
        id: 103,
        name: "Canvas Sneakers",
        category: "footwear",
        image: sneakers,
        description: "Classic canvas sneakers with rubber sole",
        price: 6999.99,
        brand: "Street Style",
        color: "White"
      },
      {
        id: 104,
        name: "Chelsea Boots",
        category: "footwear",
        image: chealsee,
        description: "Classic boots cowboy",
        price: 3999.99,
        brand: "Street Style",
        color: "White"
      }
    ]
  },
  {
    id: 2,
    name: "Business Casual",
    description: "Perfect for the office or a semi-formal event.",
    season: "All Seasons",
    image: blazer,
    items: [
      {
        id: 201,
        name: "Blazer",
        category: "outerwear",
        image: blazer,
        description: "Tailored fit wool-blend blazer",
        price: 7999.99,
        brand: "Professional Edge",
        color: "Navy"
      },
      {
        id: 202,
        name: "Slim Fit Shirt",
        category: "top",
        image: shirts,
        description: "Cotton-blend slim fit dress shirt",
        price: 999.99,
        brand: "Business Elite",
        color: "Light Blue"
      },
      {
        id: 204,
        name: "Brown Brougues",
        category: "top",
        image: brougues,
        description: "Cotton-blend slim fit dress shirt",
        price: 7999.99,
        brand: "Business Elite",
        color: "Light Blue"
      },
      {
        id: 203,
        name: "Chinos",
        category: "bottom",
        image: chinos, 
        description: "Classic fit stretch chino pants",
        price: 899.99,
        brand: "Urban Comfort",
        color: "Khaki"
      }
    ]
  }
];
