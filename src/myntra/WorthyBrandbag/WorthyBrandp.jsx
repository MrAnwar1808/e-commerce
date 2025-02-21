

import React from "react";
import Worthybrand from "./WorthyBrandc";
import './WorthyBrand.css'; 


const Worthybrandparent = () => {

    const products = [
        { image: "demo.jpg", name: "Nike", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "Puma", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "Adidas", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "Superdry", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "Fossil", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "maxx", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "Under coast", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo.jpg", name: "Under Armor", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
      ];

    return(

  
        <section className="featured-products">
          <h2>Medal Worthy Brands To Bag</h2>
          <div className="product-grid">
            {products.map((product, index) => (

                <Worthybrand  key={index} 
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

export default Worthybrandparent;