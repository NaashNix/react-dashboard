import React, { Fragment } from 'react';
import CountViewer from './CountViewer';
import Form from './CustomerForm/Form';
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
				<Button bgColor={"#F4891D"} onClick={props.onClick}>
					ADD CUSTOMERS
				</Button>
				<Button bgColor={"#D80A90"}>ADD ITEMS</Button>
			</div>
			
		</div>
	);
}

export default Dashboard;
