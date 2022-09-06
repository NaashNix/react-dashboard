import React, { Fragment } from 'react';
import CountViewer from './CountViewer';
import classes from './Dashboard.module.css';
import Button from './UI/Button';

const Dashboard = () => {
   return (
		<div className={classes.mainParent}>
			<div className={classes.parent}>
				<CountViewer
					bgColor={"#449FE5"}
					heading={"CUSTOMERS"}
					count={"89"}
				/>
				<CountViewer bgColor={"#09A24F"} heading={"ITEMS"} count={"89"} />
			</div>
			<div>
				<Button bgColor={"#F4891D"}>ADD CUSTOMERS</Button>
				<Button bgColor={"#D80A90"}>ADD ITEMS</Button>
			</div>
		</div>
	);
}

export default Dashboard;
