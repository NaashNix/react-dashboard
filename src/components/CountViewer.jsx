import React from 'react';
import Card from './UI/Card';

const CountViewer = (props) => {
   return (
      <Card color={props.bgColor}>
         <span className={classes.heading} >{props.heading}</span>
         <span>{props.count}</span>
         <img src={props.imgUrl} alt={props.alter} />
      </Card>
   );
}

export default CountViewer;
