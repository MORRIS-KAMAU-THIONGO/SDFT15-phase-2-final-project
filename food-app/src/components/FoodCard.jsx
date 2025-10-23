import React from 'react';
import { useCart } from '../context/CartContext';

const FoodCard = ({ food }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(food);
  };

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>${food.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
