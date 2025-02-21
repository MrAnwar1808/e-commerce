
import React from "react";
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
