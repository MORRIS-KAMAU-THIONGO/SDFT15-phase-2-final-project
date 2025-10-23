import React from 'react';
import { useCart } from '../context/CartContext';

// FoodCard component to display individual food item details and add to cart functionality
const FoodCard = ({ food }) => {
  // Access the addToCart function from the cart context
  const { addToCart } = useCart();

  // Function to handle adding the food item to the cart
  const handleAddToCart = () => {
    addToCart(food);
  };

  return (
    <div className="food-card">
      {/* Food image */}
      <img src={food.image} alt={food.name} className="food-image" />

      {/* Food name */}
      <h3 className="food-name">{food.name}</h3>

      {/* Food description */}
      <p className="food-description">{food.description}</p>

      {/* Food price */}
      <p className="food-price">{food.price}</p>

      {/* Add to Cart button */}
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
