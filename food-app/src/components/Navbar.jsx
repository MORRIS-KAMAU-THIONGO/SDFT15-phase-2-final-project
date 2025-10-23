 import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <h1>Food App</h1>
      <div>
        Cart: <span className="cart-count">{getCartCount()}</span>
      </div>
    </nav>
  );
};

export default Navbar;
