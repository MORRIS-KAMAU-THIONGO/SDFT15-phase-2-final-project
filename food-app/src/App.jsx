import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <FoodList />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
