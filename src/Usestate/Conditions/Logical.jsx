
import { useState } from "react";

function Logical(){
    const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h1>Logical Example: </h1>
      {showMessage && <p>This message is conditionally rendered!</p>}
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
    </div>
  )
}

export default Logical