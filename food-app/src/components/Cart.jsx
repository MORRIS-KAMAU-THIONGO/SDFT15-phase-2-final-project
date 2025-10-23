import React from 'react';
import { useCart } from '../CartContext';

// Cart component to display cart items and total
const Cart = () => {
  // Get cart state and functions from context
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {/* Check if cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* List of cart items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                {/* Remove item button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart total */}
          <div className="cart-total">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          </div>

          {/* Clear cart button */}
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
