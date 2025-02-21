
import React from "react";
import Header from "../Header/Header";
import Advertisement from "../Advbox/Advbox";
import Worthybrandparent from "../WorthyBrandbag/WorthyBrandp";
import Globalbrandp from "../GlobalBrandbag/Globalbrandp";
import Categoryparent from "../Shopbycategory/Categoryp";


const Homepage = () => {
    return(

     <div>

             <Header />
             <Advertisement />
             <Worthybrandparent />
             <Globalbrandp />
             <Categoryparent />


     </div>
    )
}

export default Homepage;