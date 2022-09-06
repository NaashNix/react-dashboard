import React, { Fragment } from 'react';
import CountViewer from './CountViewer';
import classes from './Dashboard.module.css';

const Dashboard = () => {
   return (
		<div className={classes.mainParent}>
			<div className={classes.parent}>
				<CountViewer
					bgColor={"#449FE5"}
					heading={"CUSTOMERS"}
					count={"89"}
				/>
				<CountViewer 
            bgColor={"#09A24F"}
            heading={"ITEMS"}
            count={"89"} />
			</div>
			<div>
				<button>ADD CUSTOMERS</button>
				<button>ADD ITEMS</button>
			</div>
		</div>
	);
}

export default Dashboard;
