import React from 'react';
import HeroBanner from './HeroBanner';
import PromotionalCards from './PromotionalCards';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  discount?: number;
}

interface HomePageProps {
  addToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  return (
    <div className="bg-[#f1f3f6] min-h-screen">
      <HeroBanner />
      <PromotionalCards addToCart={addToCart} />
    </div>
  );
};

export default HomePage;