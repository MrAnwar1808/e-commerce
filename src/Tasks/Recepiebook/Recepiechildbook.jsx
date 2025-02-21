
import React from "react";
import Recepiegrandchild from "./Recepiegrand";

const Recepiechild = (props) => {
    return(
        <div className="recepiechild">

           
           <p><strong>Recepie Name: </strong>{props.recipe.name}</p>
           <p><strong>Ingredients: </strong>{props.recipe.ingredients}</p>
           <Recepiegrandchild prepTime={props.recipe.prepTime}/>

        </div>
    )
}

export default Recepiechild