
import React, { useState } from "react";
import Childcart from "./Childcart";
import './cart.css';

function Parentcart() {
  const [cartItems, setCartItems] = useState([]);
  

  const availableItems = [
    { image: "Kent.jpg", name: "Pen", price: 20 },
    { image: "keyboardcover.jpg", name: "Keyboard Cover", price: 10 },
    { image: "laptop.jpg", name: "Laptop", price: 5 },
    { image: "moto128.jpg", name: "Moto 128GB", price: 120 },
    { image: "moto256.jpg", name: "Moto 256GB", price: 150 },
    { image: "oppocover.jpg", name: "Oppo Phone Cover", price: 15 },
    { image: "shoes.jpg", name: "Running Shoes", price: 60 },
    { image: "minimalist.jpg", name: "Minimalist Hair oil", price: 10 }
  ];

  const handleQuantityChange = (name, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.name === item.name)

      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (name) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="available-items">
        {availableItems.map((item) => (
          <div key={item.name} className="item">
            <img src={`/images/${item.image}`} alt={item.name} className="item-image" />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <button className="add-to-cart-btn" onClick={() => addItemToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Your Cart</h2>
        {cartItems.length === 0 && <p>Your cart is empty!</p>}
        {cartItems.map((item) => (
            
          <Childcart
            key={item.name}
            cartItem={item}
            onQuantityChange={handleQuantityChange}
            onRemove={removeItemFromCart}
          />
        ))}

        <div className="total-price">
          <p>Total: ${calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default Parentcart;
