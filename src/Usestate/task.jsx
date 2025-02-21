
import { useState } from "react";



const Toggletheme = () => {
    const [theme ] = useState('light')
     let button
   

     
        return(
                 <div className="btn">



                {theme}



                 </div>
        )
    }

export default Toggletheme


