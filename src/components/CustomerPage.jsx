import React from 'react';
import CustomerTable from './CustomerForm/CustomerTable/CustomerTable';
import Form from './CustomerForm/Form';

import classes from './CustomerPage.module.css';

const CustomerPage = (props) => {
   return (
		<div
			className={`${classes.mainParent} 
         ${props.visibility === false ? classes.hide : ""}`}
		>
			<Form onClick={props.onclick} />
			<CustomerTable />
		</div>
	);
}

export default CustomerPage;
