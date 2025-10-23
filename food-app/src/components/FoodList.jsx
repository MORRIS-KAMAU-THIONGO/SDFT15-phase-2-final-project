import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';

// FoodList component to display list of food items for a category
const FoodList = ({ category }) => {
  // State to hold the list of food items
  const [foods, setFoods] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch food items when category changes
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        // Fetch data from JSON server
        const response = await fetch(`http://localhost:3001/${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch food items');
        }
        const data = await response.json();
        setFoods(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [category]);

  // Display loading message
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Display error message
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="food-list">
      
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
