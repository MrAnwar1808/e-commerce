import React, { useState } from "react";
import Childquantity from "./Childquantity";
import './quantity.css'; 

function Parentquantity() {
  const [cartItems, setCartItems] = useState([
    { image: 'Kent.jpg', name: 'Pen', price: 20, quantity: 2 },
    { image: 'Kent.jpg', name: 'Pencil', price: 10, quantity: 1 },
    { image: 'Kent.jpg', name: 'Eraser', price: 5, quantity: 5 },
    { image: 'Kent.jpg', name: 'Notebook', price: 15, quantity: 1 },
    { image: 'Kent.jpg', name: 'Ruler', price: 3, quantity: 3 },
  ]);

  const handleQuantityChange = (name, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="quantity-container">
      <h1>Shopping Cart</h1>
      {cartItems.map((item, index) => (
        
        <Childquantity
          key={`${item.name}-${index}`}
          cartItem={item}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
}

export default Parentquantity;
