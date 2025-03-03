import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, setCartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="bg-[#2874f0] text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <a href="/" className="flex-shrink-0 flex flex-col items-start">
              <span className="text-xl font-bold italic">Flipkart</span>
              <span className="text-xs italic flex items-center">
                Explore <span className="text-yellow-400 mx-1">Plus</span>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                  alt="Flipkart Plus"
                  className="w-3 h-3"
                />
              </span>
            </a>
            <div className="hidden md:block ml-6 flex-1 max-w-2xl">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  className="w-full bg-white text-gray-800 pl-4 pr-10 py-2 rounded-sm focus:outline-none"
                  placeholder="Search for products, brands and more"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-4 text-[#2874f0]">
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-white text-[#2874f0] px-8 py-1 font-medium">
              Login
            </button>
            <a href="#" className="hover:text-gray-200 font-medium">
              Become a Seller
            </a>
            <div className="relative group">
              <button className="flex items-center hover:text-gray-200 font-medium">
                More
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Notification Preferences
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    24x7 Customer Care
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Advertise
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Download App
                  </a>
                </div>
              </div>
            </div>
            <a 
              href="#" 
              className="flex items-center hover:text-gray-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleCartClick();
              }}
            >
              <div className="relative">
                <ShoppingCart size={20} className="mr-1" />
                {cartCount > 0 && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-[#2874f0] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </div>
                )}
              </div>
              Cart
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <a 
              href="#" 
              className="mr-4 relative"
              onClick={(e) => {
                e.preventDefault();
                handleCartClick();
              }}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-[#2874f0] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </div>
              )}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            className="w-full bg-white text-gray-800 pl-4 pr-10 py-2 rounded-sm focus:outline-none"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-0 top-0 h-full px-4 text-[#2874f0]">
            <Search size={20} />
          </button>
        </form>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              Login
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              Become a Seller
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              More
            </a>
            <a
              href="/cart"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                handleCartClick();
              }}
            >
              Cart
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;