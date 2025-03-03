import React from 'react';
import { Trash2 } from 'lucide-react';

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

interface CartPageProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const CartPage: React.FC<CartPageProps> = ({ cart, setCart, setCartCount }) => {
  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    setCartCount(prev => prev - 1);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, itemName: string) => {
    console.error(`Failed to load image for ${itemName}: ${e.currentTarget.src}`);
    e.currentTarget.src = 'https://via.placeholder.com/150?text=Image+Not+Found'; // Fallback image
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">My Cart ({cart.length})</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Your cart is empty!</p>
          <a href="/products" className="text-[#2874f0] hover:underline">Continue Shopping</a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 mb-4 rounded shadow flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-contain mr-4"
                  onError={(e) => handleImageError(e, item.name)}
                  onLoad={() => console.log(`Loaded image for ${item.name}: ${item.image}`)}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                  {item.discount && (
                    <p className="text-sm text-[#388e3c]">{item.discount}% off</p>
                  )}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-medium mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Price ({cart.length} item{cart.length > 1 ? 's' : ''})</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Charges</span>
              <span className="text-[#388e3c]">Free</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className="w-full mt-4 bg-[#fb641b] text-white py-2 rounded hover:bg-[#f4511e]">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;