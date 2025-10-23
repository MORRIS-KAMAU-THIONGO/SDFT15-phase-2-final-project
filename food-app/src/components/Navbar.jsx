import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>Food App</h1>
      <div className="cart-count">
        Cart: {cart.length} items
      </div>
    </nav>
  );
};

export default Navbar;
