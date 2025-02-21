
import React, { useState } from "react";

function Childcart({ cartItem, onQuantityChange, onRemove }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(cartItem.name, newQuantity);
  };

  const handleRemove = () => {
    onRemove(cartItem.name);
  };

  return (
    
    <div className="cart-item">
      <div className="item-details">
        <img className="cart-item-image" src={`/images/${cartItem.image}`} alt={cartItem.name} />
        <div>
          <p>{cartItem.name}</p>
          <p>Price: ${cartItem.price}</p>
          <p>Total: ${cartItem.price * quantity}</p>
        </div>
      </div>
      <div className="quantity-controls">
        <button onClick={() => handleQuantity(quantity + 1)}>Increment</button>
        <button onClick={() => handleQuantity(quantity - 1)}>Decrement</button>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={handleRemove} className="remove-item">Remove Item</button>
    </div>
  );
}

export default Childcart;
