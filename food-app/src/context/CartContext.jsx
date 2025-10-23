import React, { createContext, useContext, useState } from 'react';

// Create the CartContext to manage global cart state
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component that wraps the app to provide cart functionality
export const CartProvider = ({ children }) => {
  // State to hold the items in the cart, initialized as an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  // If the item already exists, increment its quantity; otherwise, add it with quantity 1
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Increment quantity if item already in cart
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  // Decrement quantity if more than 1, otherwise remove the item entirely
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from price string (e.g., "Ksh 1200" -> 1200)
      const price = parseInt(item.price.replace('Ksh ', ''));
      return total + price * item.quantity;
    }, 0);
  };

  // Get the total number of items in the cart (sum of quantities)
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Value object containing all cart-related functions and state
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getCartItemCount,
  };

  return React.createElement(CartContext.Provider, { value }, children);
};
