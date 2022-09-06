import React from 'react';
import CountViewer from './CountViewer';

import classes from './Dashboard.module.css';
import Button from './UI/Button';

const Dashboard = (props) => {
   return (
		<div
			className={`${classes.mainParent} 
         ${props.visibility === false ? classes.hide : ""}`}
		>
			<div className={classes.parent}>
				<CountViewer
					bgColor={"#449FE5"}
					heading={"CUSTOMERS"}
					count={"89"}
				/>
				<CountViewer bgColor={"#09A24F"} heading={"ITEMS"} count={"89"} />
			</div>
			<div>
				<Button bgColor={"#F4891D"} onclick={props.onclick}>
					ADD CUSTOMERS
				</Button>
				<Button bgColor={"#D80A90"} onclick={props.onclick} >ADD ITEMS</Button>
			</div>
			
		</div>
	);
}

export default Dashboard;
