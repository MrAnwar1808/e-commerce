
import React from "react";
import Childcontact from "./Childcontact";
import "./Contact.css"

const Parentcontact = () => {

    const contacts = [
        { name: "Anwar", phone: "8985878786", email: "anwar@gmail.com" },
        { name: "Farhan", phone: "0432499022", email: "farhan@gmail.com" },
        { name: "Anwar Farhan", phone: "0431027473", email: "anwarfarhan@gmail.com" }
      ]

    return(
        <div className="parentcontact">
            <h1>Contacts List</h1>

            <Childcontact contacts={contacts}/>
        </div>

    )
}

export default Parentcontact