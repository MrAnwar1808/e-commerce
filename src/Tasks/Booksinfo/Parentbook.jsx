
import React from "react";
import Childbook from "./childbook";
import "./Books.css"

const Parentbook = () => {

    const books = [
        { title: "Two states", author: "chetan bhaga", year: 2009 },
        { title: "Harry Potter", author: "David Yates", year: 2014 },
        { title: "One night @ the call centre", author: "chetan bhaga", year: 2005 }
      ];
    return(

        <div className="parentbook">

                <h1>Books List</h1>
                {/* {books.map((book, index) => (

                <Childbook key={index} book={book}/>

                ))} */}

                <Childbook books = {books}/>

       </div>

    )
}

export default Parentbook