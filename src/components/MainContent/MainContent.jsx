
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './MainContent.css';

const MainContent = () => {
  const products = [
    { image: "kent.jpg", name: "Kent Water Purifier", price: 100 },
    { image: "keyboardcover.jpg", name: "Keyboard Cover", price: 20 },
    { image: "laptop.jpg", name: "Laptop", price: 800 },
    { image: "moto128.jpg", name: "Moto 128GB", price: 120 },
    { image: "moto256.jpg", name: "Moto 256GB", price: 150 },
    { image: "oppocover.jpg", name: "Oppo Phone Cover", price: 15 },
    { image: "shoes.jpg", name: "Running Shoes", price: 60 },
    { image: "minimalist.jpg", name: "Minimalist Hair oil", price: 10 },
  ];

  return (
    <main className="main-content">
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </div>
      </section>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          <ProductCard image="laptop.jpg" name="Laptop" price={800} />
          <ProductCard image="kent.jpg" name="Kent Purifier" price={100} />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
