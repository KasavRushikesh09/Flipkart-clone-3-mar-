import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListingPage';
import FloatingCart from './components/FloatingCart';
import CartPage from './components/CartPage';

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

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#f1f3f6] flex flex-col">
        <Navbar cartCount={cartCount} setCartCount={setCartCount} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route 
              path="/products" 
              element={<ProductListingPage addToCart={addToCart} />}
            />
            <Route 
              path="/cart" 
              element={<CartPage cart={cart} setCart={setCart} setCartCount={setCartCount} />}
            />
          </Routes>
        </main>
        <Footer />
        <FloatingCart cartCount={cartCount} />
      </div>
    </Router>
  );
}

export default App;