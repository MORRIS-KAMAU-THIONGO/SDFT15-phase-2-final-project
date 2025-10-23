import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

// Main App component
function App() {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('appetizers');

  return (
    <CartProvider>
      <div className="App">
        {/* Navbar with category tabs and cart icon */}
        <Navbar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Main content area */}
        <main className="main-content">
          {/* Food list for the active category */}
          <FoodList category={activeCategory} />

          {/* Cart sidebar */}
          <Cart />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
