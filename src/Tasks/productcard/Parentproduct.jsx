
import React from "react";
import Childproduct from "./Childproduct";
import './product.css'

const Parentproduct = () => {

    const products = [
        { image:'Kent.jpg', name: 'Pen', price: 20, category: 'Category A' },
        { image:'keyboardcover.jpg', name: 'Book', price: 30, category: 'Category B' },
        { image:'laptop.jpg', name: 'Book', price: 30, category: 'Category B' },
        { image:'moto128.jpg', name: 'Book', price: 30, category: 'Category B' },
        { image:'shoes.jpg', name: 'Book', price: 30, category: 'Category B' }
      ]

    return (
        <div className="parentproduct">

        <h1>Product List</h1>

        {products.map((product, index) => (
       
          <Childproduct key={index} product={product} />

        ))}
      </div>
    )
}

export default Parentproduct