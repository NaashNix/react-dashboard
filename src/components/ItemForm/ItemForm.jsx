import React from 'react';
import Input from '../CustomerForm/Input';
import Button from '../UI/Button';

import classes from './ItemForm.module.css';

const ItemForm = (props) => {
   return (
		<form>
			<span className={classes.heading}>Add Item</span>

			<div className={classes.inputGroup}>
				<Input
					isValid={true}
					id={"itemName"}
					label={"Item Name"}
					type={"text"}
				/>

				<Input
					isValid={true}
					id={"qtyField"}
					label={"Qty"}
					type={"number"}
				/>

				<Input
					isValid={true}
					id={"unitPrice"}
					label={"Unit Price"}
					type={"text"}
				/>
			</div>
			<Button
				bgColor={"#9b59b6"}
				children={"ADD"}
				
			/>
			<Button
				bgColor={"#84817a"}
				children={"Back"}
				onclick={props.onclick}
			/>
		</form>
	);
}

export default ItemForm;
