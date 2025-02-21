
import React from "react";
import Childcart from "./Childcart";
import "./cart.css"

const Parentcart = () => {

    const cartItems = [
        { name: 'Books', quantity: 2, price: 50 },
        { name: 'Pens', quantity: 4, price: 20 },
        { name: 'Scale', quantity: 1, price: 10 },
        { name: 'pencil', quantity: 1, price: 15 },
        { name: 'Drawing Book', quantity: 1, price: 30 }
      ];

    return(
        <div className="parentcart">

         <h1>Shopping Cart</h1>
         {cartItems.map((item, index) => (
         <Childcart key={index} item={item} />
      ))}

        </div>
    )
}

export default Parentcart