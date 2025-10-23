import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            Total: ${getTotalPrice().toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
