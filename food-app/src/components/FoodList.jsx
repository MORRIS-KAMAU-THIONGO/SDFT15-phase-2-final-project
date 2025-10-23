import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';

// FoodList component to display a list of food items for a specific category
const FoodList = ({ category }) => {
  // State to hold the fetched food items
  const [foods, setFoods] = useState([]);

  // State to handle loading state while fetching data
  const [loading, setLoading] = useState(true);

  // State to handle any errors during data fetching
  const [error, setError] = useState(null);

  // useEffect hook to fetch data from the JSON server when category changes
  useEffect(() => {
    // Function to fetch food data from the API
    const fetchFoods = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch data from the JSON server endpoint based on category
        const response = await fetch(`http://localhost:3001/${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch food data');
        }
        const data = await response.json();
        setFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchFoods();
  }, [category]); // Dependency array: re-run when category changes

  // Display loading message while data is being fetched
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Display error message if there's an error fetching data
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="food-list">
      {/* Map over the foods array and render a FoodCard for each item */}
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
