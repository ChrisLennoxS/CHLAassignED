import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/AssignmentHistoryTable.css';
import { nurses } from '../json/nurses.js';
import { assignmentHistory } from '../json/assignmentHistory.js';

export const AssignmentHistoryTable = (props) => {
	const [assignmentData, setAssignmentData] = useState(
		<div style={{ textAlign: 'center' }}>
			Please chooose a date to see the assignment history
		</div>
	);


	const getAssignedNurses = (nurseName) => {
		const firstName = nurseName.split(' ')[0];
		const lastName = nurseName.split(' ')[1];
		for (let i = 0; i < nurses.length; i++) {
			if (
				nurses[i].firstName === firstName &&
				nurses[i].lastName === lastName
			) {
				return i;
			}
		}
	};

	const stringToDate = (originalString) => {
		let tempDate = originalString.split('/');
		return new Date(tempDate[2], tempDate[0], tempDate[1]);
	};

	useEffect(() => {
		setAssignmentData(
			assignmentHistory
				.filter(
					(obj) =>
						(props.startDate <= stringToDate(obj.date)) &&
						(stringToDate(obj.date) <= props.endDate)
				)
				.map((data, key) => {
					return (
						<div className='' key={key}>
							<div class='row assignmentTableNurseRows row-cols-5  '>
								<div class='col'>
									<div class='p-1 assignmentTableText '>
										<img
											className='assignmentTableImage'
											src={
												nurses[
													getAssignedNurses(
														data['nurse']
													)
												]['image']
											}></img>
										{data['nurse']}
										
									</div>
								</div>
								<div class='col'>
									<div class='p-3 assignmentTableText '>
										{data['room']}
									</div>
								</div>
								<div class='col'>
									<div class='p-3 assignmentTableText '>
										{data['date']}
									</div>
								</div>
								<div class='col'>
									<div class='p-3 assignmentTableText '>
										{data['start']}
									</div>
								</div>
								<div class='col'>
									<div class='p-3 assignmentTableText '>
										{data['end']}
									</div>
								</div>
							</div>
						</div>
					);
				})
		);
		
	}, [ props.endDate]);

	return (
		<>
			<div class=''>
				<div class='row assignmentHeaderDiv row-cols-5  '>
					<div class='col'>
						<div class='p-3  assignmentHistoryTableHeaderText'>
							Nurse
						</div>
					</div>
					<div class='col'>
						<div class='p-3 assignmentHistoryTableHeaderText '>
							Room
						</div>
					</div>
					<div class='col'>
						<div class='p-3 assignmentHistoryTableHeaderText'>
							Date
						</div>
					</div>
					<div class='col'>
						<div class='p-3 assignmentHistoryTableHeaderText'>
							Start
						</div>
					</div>
					<div class='col'>
						<div class='p-3 assignmentHistoryTableHeaderText'>
							End
						</div>
					</div>
				</div>
			</div>

			<div id='rowsOfNurses'>{assignmentData}</div>
		</>
	);
};
