import React from 'react'; 
import classes from "./Button.module.css";

const Button = (props) => {
   return (
      <button style={{backgroundColor : props.bgColor}} onClick={props.onClick} >
         {props.children}
      </button>
   );
}

export default Button;
