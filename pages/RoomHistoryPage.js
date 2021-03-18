import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MainFooter } from '../components/MainFooter.js';
import { MainNavBar } from '../components/MainNavBar.js';
import { NurseDropdown } from '../components/NurseDropDown';
import { RoomDropDown } from '../components/RoomDropDown.js';
import { CalendarDropDown } from '../components/CalendarDropDown.js';
import { AssignmentHistoryTable } from '../components/AssignmentHistoryTable.js';
import greenFile from '../images/greenFile.svg';




export const RoomHistoryPage = () => {
	const [startDate, setStartDate] = useState(new Date(2021, 2, 1));
	const [endDate, setEndDate] = useState(new Date(2021, 3, 15));

	useEffect(() => {}, [startDate, endDate]);

	return (
		<>
			<MainNavBar className='mainNav'></MainNavBar>
			<div className='container-fluid'>
				<div id='contents'>
					<div>
						<p id='assignmentHistoryText'>Assignment History</p>
					</div>
					<div className='dropdownDiv d-flex justify-content-between'>
						{/* 
						<NurseDropdown
							selectedNurse={() => console.log()}></NurseDropdown>*/}
						<RoomDropDown className='roomsDropDown'></RoomDropDown>
						<NurseDropdown
						tempNurse={() => console.log("worlsls")}
							selectedNurse={() => console.log()}></NurseDropdown>
						<CalendarDropDown
							setStartDate={(start) => setStartDate(start)}
							setEndDate={(end) =>
								setEndDate(end)
							}></CalendarDropDown>
					</div>

					<button
						id='runButton'
						className='float-right btn btn-success'>
						Run
					</button>
					<div>
						<p id='recentAssign'>Recent Assignment History</p>
						<img src={greenFile} />
						<a id='csvDownloadLink'>Download All History CSV</a>
					</div>
					<AssignmentHistoryTable
						startDate={startDate}
						endDate={endDate}
						className='assignmentTable'></AssignmentHistoryTable>
				</div>
			</div>
			<MainFooter></MainFooter>
		</>
	);
};

