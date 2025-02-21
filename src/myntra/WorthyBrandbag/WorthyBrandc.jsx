
import React from "react";

const Worthybrand = ({ image, name, price, description }) => {

    return (
        <div className="worthy">
        <img src={`/images2/${image}`} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
        <button>Add to Cart</button>
      </div>
    )

} 

export default Worthybrand;