
import React from "react";
import Grandchildbook from "./Grandchildbook";

const Childbook = (props) => {
    return(

        <div className="childbook">
        
         {/* <p><strong>Title: </strong>{props.book.title} <br /> <strong>Author: </strong>{props.book.author}</p>

        <Grandchildbook year={props.book.year} />

       </div> */}


          {props.books.map((book, index) => (

            <div key={index}>
                 <p><strong>Title: </strong>{book.title} <br /> 
                    <strong>Author: </strong>{book.author}</p>
                    
                  <Grandchildbook year={book.year} />
           </div>
))}
</div>

    )
}

export default Childbook