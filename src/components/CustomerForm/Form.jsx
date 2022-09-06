import React from 'react';
import Input from './Input';

import classes from './Form.module.css';
import Button from '../UI/Button';

const Form = () => {
   return (
		<form>
			<span className={classes.heading}>Add Customer</span>

			<Input
				isValid={true}
				id={"customerName"}
				label={"Name"}
				type={"text"}
			/>

			<Input
				isValid={true}
				id={"customerAddress"}
				label={"Address"}
				type={"text"}
			/>

			<Input
				isValid={true}
				id={"customerTel"}
				label={"Telephone"}
				type={"text"}
			/>

			<Button bgColor={"#9b59b6"} children={'ADD'} />
		</form>
	);
}

export default Form;
