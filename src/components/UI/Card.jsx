import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
   return (
      <div className={classes.cardParent} style={{backgroundColor: props.color}} >
         {props.children}
      </div>
   );
}

export default Card;
