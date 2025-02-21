
import React from "react";

const Childcontact = (props) => {
    return(
        <div className="childcontact" >
           
            {props.contacts.map((contact, index) => (

              <div key={index} >
                  <p><strong>Name: </strong>{contact.name}</p>
                  <p><strong>Phone: </strong>{contact.phone}</p>
                  <p><strong>Email: </strong>{contact.email}</p>
             </div>
      ))}
   

        </div>
    )
}

export default Childcontact