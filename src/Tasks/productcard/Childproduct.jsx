
import React from "react";
import Grandchildproduct from "./Grandchildproduct";

const Childproduct = (props) => {
    return(
        <div className="childproduct">
        <img src={`/images/${props.product.image}`} alt={props.product.name} />
       
      <p><strong>Product Name: </strong>{props.product.name}</p>
      <p><strong>Price: </strong>${props.product.price}</p>

      <Grandchildproduct category={props.product.category} />
    </div>
    )
}

export default Childproduct