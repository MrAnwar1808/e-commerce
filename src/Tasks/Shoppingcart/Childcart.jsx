
import React from "react";
import Grandchildcart from "./Grandchildcart";

const Childcart = ({item}) => {
    return(
        <div className="childcart">

         <p><strong>Name: </strong>{item.name}</p>
         <p><strong>Quantity: </strong>{item.quantity}</p>
        
         <Grandchildcart  price={item.price} quantity={item.quantity} />

        </div>
    )
}

export default Childcart