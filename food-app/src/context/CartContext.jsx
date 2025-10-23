import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error("Error loading cart:", err));
  }, []);

  // Add to cart
  const addToCart = async (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      alert("Item already in cart");
      return;
    }

    const res = await fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const newItem = await res.json();
    setCart([...cart, newItem]);
  };

  // Remove from cart (but keep in db)
  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
