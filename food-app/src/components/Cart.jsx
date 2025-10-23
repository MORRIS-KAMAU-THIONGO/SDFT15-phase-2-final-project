import React from 'react';
import { useCart } from '../context/CartContext';

// Cart component to display selected items, total price, and allow item removal
const Cart = ({ onClose }) => {
  // Access cart context functions and state
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  // Function to handle removing an item from the cart
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        {/* Cart header with title and close button */}
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Cart items list */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            // Display message when cart is empty
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            // Map over cart items and display each one
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {/* Item image */}
                <img src={item.image} alt={item.name} className="cart-item-image" />

                {/* Item details */}
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>

                {/* Remove button */}
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart footer with total and clear button */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <p className="total-price">Total: Ksh {getTotalPrice()}</p>
            <button className="clear-cart-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
