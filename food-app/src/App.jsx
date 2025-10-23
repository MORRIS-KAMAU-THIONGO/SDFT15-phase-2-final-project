import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const responses = await Promise.all([
          fetch('http://localhost:3001/mainDishes'),
          fetch('http://localhost:3001/appetizers'),
          fetch('http://localhost:3001/drinks'),
          fetch('http://localhost:3001/snacks')
        ]);

        const [mainDishes, appetizers, drinks, snacks] = await Promise.all(
          responses.map(res => res.json())
        );

        const allFoods = [
          ...mainDishes.map(item => ({ ...item, category: 'Main Dishes' })),
          ...appetizers.map(item => ({ ...item, category: 'Appetizers' })),
          ...drinks.map(item => ({ ...item, category: 'Drinks' })),
          ...snacks.map(item => ({ ...item, category: 'Snacks' }))
        ];

        setFoods(allFoods);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch food data');
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <div className="app">Loading...</div>;
  if (error) return <div className="app">Error: {error}</div>;

  return (
    <div className="app">
      <Navbar />
      <FoodList foods={foods} />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
