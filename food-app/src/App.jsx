import React from "react";
import Navbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <FoodList />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
