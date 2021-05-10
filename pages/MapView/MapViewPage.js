import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../RoomHistory/RoomHistoryPage.css'
import '../MapView/MapViewPage.css';
import { MainNavBar } from '../../components/MainNavBar/MainNavBar.js'
import { MainFooter } from '../../components/MainFooter/MainFooter.js';
import { CreateAssignmentModal } from '../../components/CreateAssignmentModal/CreateAssignmentModal.js';
import { nurses } from '../../json/nurses';
import { CurrentUser } from '../../context/CurrentUserContext';

export const MapViewPage = () => {
	const [showCreateAssignmentModal, setShowCreateAssignmentModal] = useState(
		false
	);
	const [selectedNurse, setSelectedNurse] = useState(null);
	const [selectedRoom, setSelectedRoom] = useState(null);
	const [clickCount, setClickCount] = useState(0);

	const [roomOneImage, setRoomOneImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomTwoImage, setRoomTwoImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomThreeImage, setRoomThreeImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomFourImage, setRoomFourImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomFiveImage, setRoomFiveImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomSixImage, setRoomSixImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomSevenImage, setRoomSevenImage] = useState(
		require('../../images/plus.svg')
	);
	const [roomEightImage, setRoomEightImage] = useState(
		require('../../images/plus.svg')
	);

	const {value, setValue} = useContext(CurrentUser);

	

	useEffect(() => {
		if (selectedNurse === null) {
		} else {
			switch (selectedRoom) {
				case 0:
					setRoomOneImage(nurses[selectedNurse].image);
					document.getElementById('roomOne').style.border = 'none';
					break;
				case 1:
					setRoomTwoImage(nurses[selectedNurse].image);
					document.getElementById('roomTwo').style.border = 'none';
					break;
				case 2:
					setRoomThreeImage(nurses[selectedNurse].image);
					document.getElementById('roomThree').style.border = 'none';
					break;
				case 3:
					setRoomFourImage(nurses[selectedNurse].image);
					document.getElementById('roomFour').style.border = 'none';
					break;
				case 4:
					setRoomFiveImage(nurses[selectedNurse].image);
					document.getElementById('roomFive').style.border = 'none';
					break;
				case 5:
					setRoomSixImage(nurses[selectedNurse].image);
					document.getElementById('roomSix').style.border = 'none';
					break;
				case 6:
					setRoomSevenImage(nurses[selectedNurse].image);
					document.getElementById('roomSeven').style.border = 'none';
					break;
				case 7:
					setRoomEightImage(nurses[selectedNurse].image);
					document.getElementById('roomEight').style.border = 'none';
					break;
			}
		}
		console.log(`the current selected nurse is${selectedNurse}`);
		
	}, [clickCount]);

	useEffect(() => {
		console.log("please be utilized  this time " + value.firstName)
	},[])

	return (
		<div id="pageDiv">
			<MainNavBar
				parentClickCount={() => setClickCount(clickCount + 1)}
				showCreateModal={(value) => {
					setShowCreateAssignmentModal(value);
					setSelectedRoom(null);
					setSelectedNurse(null);
				}}></MainNavBar>
				{showCreateAssignmentModal ? (
				<CreateAssignmentModal
					overrideParentRoomChange={(newSelectedRoom) =>
						setSelectedRoom(newSelectedRoom)
					}
					parentClickCount={() => setClickCount(clickCount + 1)}
					selectedRoom={selectedRoom}
					selectedNurse={(chosenNurse) =>
						setSelectedNurse(chosenNurse)
					}
					showCreateModal={(value) =>
						setShowCreateAssignmentModal(value)
					}
					id='createAssignmentModal'
				/>
			) : (
				''
			)}
			<div id='outermostDiv' className='container d-grid gap-3'>
				<div className='row align-items-center d-flex justify-content-around'>
					<div className='row d-flex justify-content-around'>
						<div className='roomDiv'>
							<div
								id='roomOne'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(0);
								}}
								className='rooms roomAssign roomOneSevenEight '>
								<p>Room 1</p>
								<img
									className='roomImg'
									src={roomOneImage} alt=""></img>
							</div>
						</div>
						<div className='roomDiv d-flex justify-content-around'>
							<div
								id='roomTwo'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(1);
								}}
								className='rooms roomAssign roomTwoThree '>
								<p>Room 2</p>
								<img
									className='roomImg'
									src={roomTwoImage} alt=""></img>
							</div>
							<div
								id='roomThree'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(2);
								}}
								className='rooms roomAssign roomTwoThree '>
								<p>Room 3</p>
								<img
									className='roomImg'
									src={roomThreeImage} alt=""></img>
							</div>
						</div>
						<div className='roomDiv'>
							<div
								id='roomFour'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(3);
								}}
								className='rooms roomAssign roomFourSix rightAlignedRooms'>
								<p>Room 4</p>
								<img
									className='roomImg'
									src={roomFourImage} alt=""></img>
							</div>
						</div>
					</div>
					<div
						id='middleRowDiv'
						className='row d-flex justify-content-between align-items-center'>
						<div
							id='circleDiv'
							className='roomOneSevenEight align-self-center'>
							<div
								id='circleRoom'
								className='rooms  align-self-center'></div>
						</div>
						<div className='centerSpace'></div>
						<div className=''>
							<div
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(4);
								}}
								id='roomFive'
								className='rooms roomAssign rightAlignedRooms'>
								<p>Room 5</p>
								<img
									id='roomFiveImage'
									className='roomImg'
									src={roomFiveImage} alt=""></img>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='roomDiv'>
							<div
								id='roomEight'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(7);
								}}
								className='rooms roomOneSevenEight roomAssign'>
								<p>Room 8</p>
								<img
									className='roomImg'
									src={roomEightImage} alt=""></img>
							</div>
						</div>
						<div className='roomDiv'>
							<div
								id='roomSeven'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(6);
								}}
								className='rooms roomAssign roomOneSevenEight'>
								<p>Room 7</p>
								<img
									className='roomImg'
									src={roomSevenImage} alt=""></img>
							</div>
						</div>
						<div className='roomDiv'>
							<div
								id='roomSix'
								onClick={() => {
									setShowCreateAssignmentModal(true);
									setSelectedRoom(5);
								}}
								className='rooms roomAssign roomFourSix rightAlignedRooms'>
								<p>Room 6</p>
								<img
									className='roomImg'
									src={roomSixImage} alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</div>

			<MainFooter></MainFooter>
		</div>
	);
};

