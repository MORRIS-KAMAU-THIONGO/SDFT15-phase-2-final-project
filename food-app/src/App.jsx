import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

// Main App component that manages the overall application state and layout
function App() {
  // State to track the currently selected category (e.g., 'appetizers', 'drinks', etc.)
  const [selectedCategory, setSelectedCategory] = useState('appetizers');

  // State to track whether the cart is visible or not
  const [cartVisible, setCartVisible] = useState(false);

  // Function to handle category selection from the navbar
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <CartProvider>
      <div className="App">
        {/* Header with title */}
        <header className="app-header">
          <h1>FOOD ORDER & DELIVERY</h1>
        </header>

        {/* Navbar component for navigation and cart toggle */}
        <Navbar
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onCartToggle={toggleCart}
        />

        {/* Main content area */}
        <main className="main-content">
          {/* FoodList component to display items based on selected category */}
          <FoodList category={selectedCategory} />

          {/* Cart component, conditionally rendered based on cartVisible state */}
          {cartVisible && <Cart onClose={toggleCart} />}
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
