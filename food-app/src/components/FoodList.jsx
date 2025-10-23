import React from 'react';
import FoodCard from './FoodCard';

const FoodList = ({ foods }) => {
  return (
    <div className="food-list">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
