import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:3001/mainDishes")
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div className="food-list">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default FoodList;
