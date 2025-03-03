import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProductListingPage.css';

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

interface Filters {
  category: string;
  priceRange: [number, number];
  brand: string;
  minRating: number;
}

type SortOption = 'default' | 'priceLowHigh' | 'priceHighLow' | 'popularity' | 'discount';

interface ProductListingPageProps {
  addToCart: (product: Product) => void;
}

const ProductListingPage: React.FC<ProductListingPageProps> = ({ addToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: '',
    priceRange: [0, 5000],
    brand: '',
    minRating: 0
  });
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      setLoading(true);
      try {
        const dummyProducts: Product[] = [
          { 
            id: 1, 
            name: 'Smartphone X', 
            price: 14999, 
            originalPrice: 17999,
            rating: 4.3, 
            reviewCount: 245,
            image: 'https://rukminim1.flixcart.com/image/150/150/mobile/x/y/z/samsung-galaxy-s21-5g-phantom-gray-256-gb-8-gb-ram-original-imafwfxfzxr8tza3.jpeg?q=70', 
            category: 'electronics', 
            brand: 'BrandX',
            discount: 16
          },
          { 
            id: 2, 
            name: 'Cotton T-Shirt', 
            price: 799, 
            originalPrice: 999,
            rating: 4.1, 
            reviewCount: 189,
            image: 'https://rukminim1.flixcart.com/image/150/150/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70', 
            category: 'clothing', 
            brand: 'BrandY',
            discount: 20
          },
          { 
            id: 3, 
            name: "Casual Shoes",
            price: 799, 
            originalPrice: 1999, 
            discount: 60, 
            image: "https://m.media-amazon.com/images/I/711wOx63QiL._SY695_.jpg",
            rating: 4.2, 
            reviewCount: 80, 
            category: "clothing", 
            brand: "Nike" 
          },
          { 
            id: 4, 
            name: "Wrist Watches", 
            price: 599, 
            originalPrice: 1999, 
            discount: 70, 
            image: "https://www.carlington.in/cdn/shop/products/3377_Black_1_0c08f99b-f0a5-4747-a63d-0910c2ed43b2.jpg?v=1695529841&width=1920", 
            rating: 4.3,  
            reviewCount: 200, 
            category: "electronics", 
            brand: "Carlington"
           },
          { 
            id: 5, 
            name: "Handbags", 
            price: 1199, 
            originalPrice: 1999, 
            discount: 40, 
            image: "https://tse3.mm.bing.net/th?id=OIP.2osHOZ52JG1Hjbad7m3xXgHaJ4&pid=Api&P=0&h=220", 
            rating: 4.1, 
            reviewCount: 90, 
            category: "clothing",
            brand: "Lavie" 
          },
          { 
            id: 6, 
            name: "Sandals & Floaters", 
            price: 499, 
            originalPrice: 999, 
            discount: 50, 
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/30/FITagAN2_04f83a6ffe5a46cfb1d18d2d33963724.jpg", 
            rating: 4.0, 
            reviewCount: 70, 
            category: "clothing", 
            brand: "Myntra" 
          },
          { 
            id: 7, 
            name: "Kurtas & Kurtis", 
            price: 699, 
            originalPrice: 1999,
            discount: 65, 
            image: "https://5.imimg.com/data5/SELLER/Default/2022/1/UV/TP/SV/74166486/inl09-5--500x500.jpg",
            rating: 4.4, 
            reviewCount: 120, 
            category: "clothing", 
            brand: "Biba" 
          }
        ];
        setProducts(dummyProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getFilteredProducts = useCallback((): Product[] => {
    let filtered: Product[] = [...products];

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    if (filters.brand) {
      filtered = filtered.filter(p => p.brand === filters.brand);
    }
    if (filters.minRating) {
      filtered = filtered.filter(p => p.rating >= filters.minRating);
    }

    switch (sortBy) {
      case 'priceLowHigh':
        return filtered.sort((a, b) => a.price - b.price);
      case 'priceHighLow':
        return filtered.sort((a, b) => b.price - a.price);
      case 'popularity':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'discount':
        return filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
      default:
        return filtered;
    }
  }, [products, filters, sortBy]);

  const handleAddToCart = useCallback((product: Product): void => {
    addToCart(product);
  }, [addToCart]);

  const ProductCard = React.memo<{ product: Product }>(({ product }) => (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img 
        src={product.image} 
        alt={product.name} 
        loading="lazy"
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="rating">{product.rating} ★</span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          {product.discount && (
            <span className="discount">{product.discount}% off</span>
          )}
        </div>
        <button 
          className="add-to-cart"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <div className="product-listing-page">
      <aside className="filters-section">
        <h2>Filters</h2>
        <div className="filter-group">
          <label>Category</label>
          <select 
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Price Range</label>
          <input 
            type="range" 
            min="0" 
            max="5000" 
            step="100"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({
              ...filters, 
              priceRange: [0, parseInt(e.target.value)] as [number, number]
            })}
          />
          <span>₹0 - ₹{filters.priceRange[1]}</span>
        </div>
        <div className="filter-group">
          <label>Brand</label>
          <select 
            value={filters.brand}
            onChange={(e) => setFilters({...filters, brand: e.target.value})}
          >
            <option value="">All Brands</option>
            <option value="BrandX">Brand X</option>
            <option value="BrandY">Brand Y</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Minimum Rating</label>
          <select 
            value={filters.minRating}
            onChange={(e) => setFilters({...filters, minRating: parseInt(e.target.value)})}
          >
            <option value="0">Any</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
          </select>
        </div>
      </aside>
      <main className="products-section">
        <div className="sort-section">
          <label>Sort By: </label>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
          >
            <option value="default">Relevance</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="popularity">Popularity</option>
            <option value="discount">Discount</option>
          </select>
        </div>
        <div className="products-grid">
          {getFilteredProducts().map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;