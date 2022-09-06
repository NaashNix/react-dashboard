import React from 'react';
import Input from './Input';

import classes from './Form.module.css';
import Button from '../UI/Button';

const Form = (props) => {

	const handlerAddButton = () => {
		console.log('asdf');
	}

   return (
		<form>
			<span className={classes.heading}>Add Customer</span>

			<div className={classes.inputGroup}>
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
			</div>
			<Button bgColor={"#9b59b6"} children={"ADD"} onClick={handlerAddButton} />
			<Button bgColor={"#84817a"} children={"Back"} onclick={props.onclick} />
		</form>
	);
}

export default Form;
