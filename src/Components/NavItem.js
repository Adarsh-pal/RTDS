import React from "react";
import HeadingMain from "./HeadingMain";

function NavItem(props){
   
    return <li onClick={()=>{
        
        props.updateHeading(props.name);

    }}>{props.name}</li>

}


export default NavItem;