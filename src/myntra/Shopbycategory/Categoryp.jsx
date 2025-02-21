
import React from "react";
import Category from "./Category";
import './Category.css'


const Categoryparent = () => {
    const products = [
        { image: "demo3.jpg", name: "Nike", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "Puma", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "Adidas", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "Superdry", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "Fossil", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "maxx", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "Under coast", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo3.jpg", name: "Under Armor", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
      ];
    return(

        <section className="category">
          <h2>Shop by Category</h2>
          <div className="product">
            {products.map((product, index) => (

            <Category 
                       key={index} 
                       image={product.image} 
                       name={product.name} 
                       price={product.price} 
                       description={product.description}   
            
            />
               
            ))}
          </div>
        </section>

    )
}

export default Categoryparent