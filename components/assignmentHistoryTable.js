import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/AssignmentHistoryTable.css';
import { nurses } from '../json/nurses.js';
import { floorRooms } from '../json/rooms.js';
import { assignmentHistory } from '../json/assignmentHistory.js';

export const AssignmentHistoryTable = (props) => {
	const [assignmentData, setAssignmentData] = useState(
		<div style={{ textAlign: 'center', paddingTop: '15px' }}>
			Please chooose a date to see the assignment history
		</div>
	);

	const historyArray = [];

	useEffect(() => {
		if (props.runButtonClickCount > 0) {
			showAssignment();
			props.setArrayToDownload(historyArray);
		}
	}, [props.runButtonClickCount]);

	useEffect(() => {
		if (assignmentData.length === 0 && props.runButtonClickCount === 0) {
			setAssignmentData(
				<div style={{ textAlign: 'center', paddingTop: '15px' }}>
					Please chooose a date to see the assignment history
				</div>
			);
		} else if (
			assignmentData.length === 0 &&
			props.runButtonClickCount > 1
		) {
			setAssignmentData(
				<div style={{ textAlign: 'center', paddingTop: '15px' }}>
					There are no nurse assignments based on the given criteria
				</div>
			);
		}
	}, [assignmentData]);

	const getAssignedNurse = (nurseIndex) => {
		return (
			nurses[nurseIndex]['firstName'] +
			' ' +
			nurses[nurseIndex]['lastName']
		);
	};

	const getAssignedRoom = (roomIndex) => {
		return (
			floorRooms[roomIndex]['room'] +
			': ' +
			floorRooms[roomIndex]['numOfBeds']
		);
	};

	const getNurseName = (nurseName) => {
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

	const showAssignment = () => {
		setAssignmentData(
			assignmentHistory
				.filter((obj) => {
					if (
						props.startDate !== null &&
						props.endDate !== null &&
						props.assignmentNurse !== null &&
						props.assignmentRoom !== null
					) {
						{
							console.log(
								'the props assignnurse is ' + props.nurseContent
							);
						}
						return (
							props.startDate <= stringToDate(obj.date) &&
							stringToDate(obj.date) <= props.endDate &&
							getAssignedRoom(props.assignmentRoom) ===
								obj.room &&
							getAssignedNurse(props.assignmentNurse) ===
								obj.nurse
						);
					} else if (
						props.nurseContent !== 'Choose a nurse' &&
						props.roomContent === 'Choose a room' &&
						props.startDate === null
					) {
						return (
							getAssignedNurse(props.assignmentNurse) ===
							obj.nurse
						);
					} else if (
						props.nurseContent === 'Choose a nurse' &&
						props.roomContent === 'Choose a room' &&
						props.startDate === null
					) {
						alert(
							'Please choose a specified nurse, a given room, or a date range'
						);
					} else if (
						props.nurseContent === 'Choose a nurse' &&
						props.roomContent === 'Choose a room' &&
						props.startDate !== null
					) {
						return (
							props.startDate <= stringToDate(obj.date) &&
							stringToDate(obj.date) <= props.endDate
						);
					} else if (
						props.nurseContent !== 'Choose a nurse' &&
						props.roomContent !== 'Choose a room' &&
						props.startDate === null
					) {
						return (
							getAssignedNurse(props.assignmentNurse) ===
								obj.nurse &&
							getAssignedRoom(props.assignmentRoom) === obj.room
						);
					} else if (
						props.nurseContent === 'Choose a nurse' &&
						props.roomContent !== 'Choose a room' &&
						props.startDate !== null
					) {
						return (
							props.startDate <= stringToDate(obj.date) &&
							stringToDate(obj.date) <= props.endDate &&
							getAssignedRoom(props.assignmentRoom) === obj.room
						);
					} else if (
						props.nurseContent !== 'Choose a nurse' &&
						props.roomContent === 'Choose a room' &&
						props.startDate !== null
					) {
						return (
							props.startDate <= stringToDate(obj.date) &&
							stringToDate(obj.date) <= props.endDate &&
							getAssignedNurse(props.assignmentNurse) ===
								obj.nurse
						);
					}
				})
				.map((data, key) => {
					{
						historyArray.push(data);
					}
					return (
						<div className='' key={key}>
							<div class='row assignmentTableNurseRows row-cols-5  '>
								<div class='col'>
									<div class='p-1 assignmentTableText '>
										<img
											className='assignmentTableImage'
											src={
												nurses[
													getNurseName(data['nurse'])
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
	};

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
