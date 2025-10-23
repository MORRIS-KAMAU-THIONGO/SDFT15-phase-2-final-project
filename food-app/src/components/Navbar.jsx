import React from 'react';
import { useCart } from '../CartContext';

// Navbar component for navigation and cart display
const Navbar = ({ activeCategory, setActiveCategory }) => {
  // Get cart functions from context
  const { getTotalItems } = useCart();

  // Categories for navigation tabs
  const categories = ['appetizers', 'drinks', 'snacks', 'mainDishes'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h1 className="navbar-title">Food App</h1>

        
        <div className="navbar-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        
        <div className="cart-icon">
          <span className="cart-count">{getTotalItems()}</span>
          🛒
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
