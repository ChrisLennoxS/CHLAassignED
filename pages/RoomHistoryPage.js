import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MainFooter } from '../components/MainFooter.js';
import { MainNavBar } from '../components/MainNavBar.js';
import { NurseDropdown } from '../components/NurseDropDown';
import { RoomDropDown } from '../components/RoomDropDown.js';
import { CalendarDropDown } from '../components/CalendarDropDown.js';
import { AssignmentHistoryTable } from '../components/AssignmentHistoryTable.js';
import greenFile from '../images/greenFile.svg';
import { CSVLink } from 'react-csv';

export const RoomHistoryPage = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [currentNurse, setCurrentNurse] = useState(null);
	const [nurseContent, setNurseContent] = useState(null)
	const [currentRoom, setCurrentRoom] = useState(null);
	const [roomContent, setRoomContent] = useState(null);
	const [runButtonClickCount, setRunButtonClickCount] = useState(0);
	const [arrayToDownload, setArrayToDownload] = useState([]);

	const headers = [
		{ label: 'Nurse', key: 'nurse' },
		{ label: 'Room', key: 'room' },
		{ label: 'Date', key: 'date' },
		{ label: 'Start', key: 'start' },
		{ label: 'End', key: 'end' },
	];

	const csvOutput = {
		filename: 'nurseHistory_' + (new Date().toString().slice(0,21)) + ".csv",
		headers: headers,
		data: arrayToDownload,
	};

	useEffect(() => {
		console.log('The current room is ' + currentRoom);
		console.log('The end date issss' + endDate);
	}, [startDate, endDate]);

	return (
		<>
			<MainNavBar className='mainNav'></MainNavBar>
			<div className='container-fluid'>
				<div id='contents'>
					<div>
						<p id='assignmentHistoryText'>Assignment History</p>
					</div>
					<div className='dropdownDiv d-flex justify-content-between'>
						<div className="selectorDropDown">
							<NurseDropdown 
								setNurseContent={(value) => setNurseContent(value)}
								selectedNurse={(value) =>
									setCurrentNurse(value)
								}></NurseDropdown>
						</div>
						<div className="selectorDropDown">
							<RoomDropDown className="selectorDropDown"
								setRoomContent={(value) => setRoomContent(value)}
								assignmentRoom={(value) =>
									setCurrentRoom(value)
								}></RoomDropDown>
						</div>
						<div className="selectorDropDown">
							<CalendarDropDown className="selectorDropDown"
								setStartDate={(start) => setStartDate(start)}
								setEndDate={(end) =>
									setEndDate(end)
								}></CalendarDropDown>
						</div>
					</div>

					<button
						id='runButton'
						className='float-right btn btn-success'
						onClick={() =>
							setRunButtonClickCount(runButtonClickCount + 1)
						}>
						Run
					</button>
					<div>
						<p id='recentAssign'>Recent Assignment History</p>
						<img src={greenFile} alt='' />
						<CSVLink {...csvOutput}>
							<a id='csvDownloadLink' CSV>
								Download All History CSV
							</a>
						</CSVLink>
					</div>
					<AssignmentHistoryTable
						nurseContent={nurseContent}
						roomContent={roomContent}
						startDate={startDate}
						endDate={endDate}
						className='assignmentTable'
						assignmentRoom={currentRoom}
						assignmentNurse={currentNurse}
						setArrayToDownload={(nurseArray) => setArrayToDownload(nurseArray)}
						runButtonClickCount={
							runButtonClickCount
						}></AssignmentHistoryTable>
				</div>
			</div>
			<MainFooter></MainFooter>
		</>
	);
};
