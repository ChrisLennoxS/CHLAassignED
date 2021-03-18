import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import exitButton from '../images/iconfinder_icons_exit_1564505 1.svg';
import '../css/CreateAssignmentModal.css';
import { NurseDropdown } from '../components/NurseDropDown';
import { RoomDropDown } from '../components/RoomDropDown';

const Background = styled.div`
	width: 100%;
	height: 110%;
	background: rgba(0, 0, 0, 0.65);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	margin-top: -10%;
`;

const ModalWrapper = styled.div`
	width: 448px;
	height: 388px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

export const CreateAssignmentModal = (props) => {
	const [tempNurse, setTempNurse] = useState(undefined);

	useEffect(() => {
		document.getElementById('createAssignmentButton').disabled = true;

		console.log(props.selectedRoom);
	}, []);

	useEffect(() => {
		if (
			tempNurse > 0 &&
			tempNurse !== undefined &&
			props.selectedRoom !== null
		) {
			document.getElementById('createAssignmentButton').disabled = false;
		}
	}, [tempNurse, props.selectedRoom]);

	return (
		<>
			<Background>
				<ModalWrapper>
					<div className='container mx-auto outerBox'>
						<div className='header'>
							<p className='modalHeader'>Create Assignment</p>
							<button
								type='button'
								onClick={() => {
									props.showCreateModal(false);
								}}
								className='btn-close closeButton'
								aria-label='Close'>
								<img
									src={exitButton}
									alt='button to close window'></img>
							</button>
						</div>

						<div id='nurses'>
							<NurseDropdown
								selectedNurse={props.selectedNurse}
								tempNurse={(value) => setTempNurse(value)}
								id='nurses'></NurseDropdown>
						</div>
						<div id='roomsDropDown'>
							<RoomDropDown
								overrideParentRoomChange={
									props.overrideParentRoomChange
								}
								selectedRoom={props.selectedRoom}
								className='roomsDropDown'></RoomDropDown>
						</div>

						<div className='modalContent assignButton'>
							<button
								id='createAssignmentButton'
								onClick={() => {
									props.showCreateModal(false);
									props.parentClickCount();
								}}
								className='float-right btn btn-success'>
								Assign
							</button>
						</div>
					</div>
				</ModalWrapper>
			</Background>
		</>
	);
};
