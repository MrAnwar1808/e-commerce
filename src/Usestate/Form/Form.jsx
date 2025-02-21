
import { useState } from "react";
import './Form.css'

function Form(){
const [name, setName] = useState("")
const [email , setEmail] = useState("")

const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submited Successfully!")

  };

  return (
    
    <div className="div-container">
      <h1>Login Form</h1>
   
    <form onSubmit={handleSubmit} className="form-container">
       
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>

    </div>
  );

}

export default Form