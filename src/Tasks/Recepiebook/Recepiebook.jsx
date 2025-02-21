
import React from "react";
import Recepiechild from "./Recepiechildbook";
import "./Recepie.css"

const Recepieparent = () => {

    const recipes = [
        { name: 'Cake', ingredients: 'Flour, Sugar, Eggs', prepTime: '30 mins' },
        { name: 'Biryani', ingredients: 'Rice, Chicken, Spices', prepTime: '45 mins' },
        { name: 'Mutton Biryani', ingredients: 'Rice, Mutton, Spices', prepTime: '45 mins' },
        { name: 'Coffee', ingredients: 'coffee powder, milk, Sugar', prepTime: '15 mins' },

      ];
    return(
        <div className="recepieparent">

           <h1>Recipe Book</h1>
           {recipes.map((recipe, index) => (
           <Recepiechild key={index} recipe={recipe} />
      ))}

        </div>
    )
}

export default Recepieparent