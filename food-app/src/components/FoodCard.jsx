import React from 'react';
import { useCart } from '../CartContext';

// FoodCard component to display individual food item
const FoodCard = ({ food }) => {
  // Get addToCart function from context
  const { addToCart } = useCart();

  // Handle adding item to cart
  const handleAddToCart = () => {
    addToCart(food);
  };

  return (
    <div className="food-card">
      {/* Food image */}
      <img src={food.image} alt={food.name} className="food-image" />

      {/* Food details */}
      <div className="food-details">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-description">{food.description}</p>
        <p className="food-price">${food.price.toFixed(2)}</p>

        {/* Add to cart button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
