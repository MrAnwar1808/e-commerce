
import React from "react";

const Globalbrand = ({ image, name, price, description }) => {
    return(

        <div className="Global-child">
        <img src={`/images2/${image}`} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
        <button>Add to Cart</button>
        </div>

    )
}

export default Globalbrand;