
import React from "react";
import Globalbrand from "./Globalbrand";
import './Globalbrand.css'

const Globalbrandp = () => {

    const products = [
        { image: "demo2.jpg", name: "Nike", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "Puma", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "Adidas", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "Superdry", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "Fossil", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "maxx", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "Under coast", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
        { image: "demo2.jpg", name: "Under Armor", price: 1000, description: "extra 5% discount and free shipping on all online payments. puma.com. new"},
      ];
    return(

        <section className="Gobal-parent">
          <h2>Grand Global Brands</h2>
          <div className="product">
            {products.map((product, index) => (

                <Globalbrand 
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

export default Globalbrandp