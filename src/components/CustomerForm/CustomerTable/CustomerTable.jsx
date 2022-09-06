import React from 'react';

const CustomerTable = (props) => {
   let address;
   let name;
   let telephone;

   let row = `<tr>
      <td>${name}</td>
      <td>${address}</td>
      <td>${telephone}</td>
   </tr>`;

   return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>Telephone</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	);
}

export default CustomerTable;
