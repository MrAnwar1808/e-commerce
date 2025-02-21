
import React from "react";

const Grandchildcart = ({ price, quantity }) => {
    const totalPrice = price * quantity;
    return(
        <div className="grandchildcart">

          
           <p><strong>Total Price: </strong>${totalPrice}</p>


        </div>
    )
}

export default Grandchildcart