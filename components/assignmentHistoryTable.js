import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/CalendarDropDown.css';

export const assignmentHistoryTable = () => {
	return (
		<table id='nurseTable' className='table'>
			<thead>
				<tr>
					<th scope='col'>Nurse</th>
					<th scope='col'>Room</th>
					<th scope='col'>Date</th>
					<th scope='col'>Start</th>
					<th scope='col'>End</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope='row'>1</th>
					<td>Moses</td>
					<td>Otto</td>
					<td>1:21</td>
					<td>1:21</td>
				</tr>
				<tr>
					<th scope='row'>2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>1:21</td>
					<td>1:21</td>
				</tr>
				<tr>
					<th scope='row'>3</th>
					<td>Larry the Bird</td>
					<td>Thornton</td>
					<td>1:21</td>
					<td>1:21</td>
				</tr>
			</tbody>
		</table>
	);
};
