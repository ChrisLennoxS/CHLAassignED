import React, { useEffect, useState } from 'react';
import './RoomDropDown.css'
import 'bootstrap/dist/css/bootstrap.css';
import { floorRooms } from '../../json/rooms';
import dropDownArrow from '../../images/selectChevron.svg';

export const RoomDropDown = (props) => {
	const [content, setContent] = useState('Choose a room');
	const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
	const [clickCount, setClickCount] = useState(0);

	useEffect(() => {
		setContent(
			<div className='chosenRoomDiv d-flex justify-content-between'>
				<div>
					<p onClick={(e) => e.bubbles} className='roomText'>
						
						{floorRooms[currentRoomIndex].room}{" : "}
						{floorRooms[currentRoomIndex].numOfBeds}
					</p>
				</div>
				<img id='roomDropDownSelectChevron' src={dropDownArrow} alt=""></img>
			</div>
		);
	}, [clickCount]);

	useEffect(() => {
		
		if (props.selectedRoom === undefined || props.selectedRoom === null){
			{props.setRoomContent('Choose a room')}
			setContent(
					<div className='chosenRoomDiv d-flex justify-content-between'>
						<div >
							<p className='roomText'>Choose a room</p>
						</div>
						<img
							id='roomDropDownSelectChevron'
							src={dropDownArrow} alt=""></img>
							
					</div>
			  )
		} else{
			setContent(
					<div className='chosenRoomDiv d-flex justify-content-between'>
						<div>
							<p onClick={(e) => e.bubbles} className='roomText'>
								{floorRooms[props.selectedRoom]['room']}{" : "}
								{floorRooms[props.selectedRoom]['numOfBeds']}
							</p>
						</div>
						<img
							id='roomDropDownSelectChevron'
							src={dropDownArrow} alt=""></img>
					</div>
			  );
			}
	}, []);

	const handleRoomDropDownProp = (roomNum) => {
		return props.hasOwnProperty('overrideParentRoomChange')
			? () => console.log('yellow')
			: null;
	};

	return (
		<>
			<button
				className='btn roomDropButton '
				type='button'
				data-toggle='dropdown'
				aria-haspopup='true'
				aria-expanded='false'>
				{content}
			</button>
			<div
				className='dropdown-menu roomDropDownContainer assignmentHistoryRoomAndCalDropDown'
				aria-labelledby='dropdownMenuButton'>
				{floorRooms.map((data, key) => {
					return (
						<div 
							onClick={() => ([
								setCurrentRoomIndex(key),
								props.setRoomContent(key),
								setClickCount(clickCount + 1),
								(props.overrideParentRoomChange !== undefined) ? props.overrideParentRoomChange(key): null,
								 props.assignmentRoom(key)
								
							])}
							className='roomChoiceDiv'
							key={key}>
							<p onClick={(e) => e.bubbles} className='roomText'>
								<span className='boldedText'>
									{data.room} {" : "}
								</span>
								{data.numOfBeds}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

RoomDropDown.defaultProps = {
	assignmentRoom: (() => {}),
	setRoomContent: () => {}
}