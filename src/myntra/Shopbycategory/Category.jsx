
import React from "react";

const Category = ({ image, name, price, description }) => {
    return(

        <div className="category-child">
        <img src={`/images2/${image}`} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
        <button>Add to Cart</button>
        </div>

    )
}

export default Category