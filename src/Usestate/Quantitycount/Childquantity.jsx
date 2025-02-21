
import { useState } from "react";

function Childquantity({ cartItem, onQuantityChange }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(cartItem.name, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="item-details">

        <img className="item-image" src={`/images/${cartItem.image}`} alt={cartItem.name}/>

        <div className="item-info">
          <p className="item-name">{cartItem.name}</p>
          <p className="item-price">Price: ${cartItem.price}</p>
          <p className="item-total">Total: ${cartItem.price * quantity}</p>
        </div>
      </div>
      
      <div className="quantity-controls">

        <button className="quantity-btn" onClick={() => handleQuantity(quantity + 1)} >
          Increment
        </button>

        <button className="quantity-btn" onClick={() => handleQuantity(quantity - 1)} >
          Decrement
        </button>

        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}

export default Childquantity;
