import React from 'react';
import Card from './UI/Card';
import classes from './CountViewer.module.css';


const CountViewer = (props) => {
   return (
      <Card color={props.bgColor}>
         <span className={classes.heading} >{props.heading}</span>
         <span className={classes.count} >{props.count}</span>
      </Card>
   );
}

export default CountViewer;
