import React from 'react';
import { useCart } from '../context/CartContext';

// Navbar component for navigation between categories and cart access
const Navbar = ({ selectedCategory, onCategorySelect, onCartToggle }) => {
  // Access cart context to get item count for cart icon
  const { getCartItemCount } = useCart();

  // Array of category objects for navigation tabs
  const categories = [
    { key: 'appetizers', label: 'Appetizers' },
    { key: 'drinks', label: 'Drinks' },
    { key: 'snacks', label: 'Snacks' },
    { key: 'mainDishes', label: 'Main Dishes' },
  ];

  // Array of location options for the location selector
  const locations = ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret'];

  return (
    <nav className="navbar">
      {/* Navigation tabs for categories */}
      <div className="nav-tabs">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`nav-tab ${selectedCategory === category.key ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Location selector dropdown */}
      <div className="location-selector">
        <select className="location-select">
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Cart icon with item count */}
      <div className="cart-icon" onClick={onCartToggle}>
        <span className="cart-count">{getCartItemCount()}</span>
        🛒
      </div>
    </nav>
  );
};

export default Navbar;
