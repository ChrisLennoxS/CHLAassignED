import React, { useEffect, useState } from 'react';
import './NurseDropDown.css'
import 'bootstrap/dist/css/bootstrap.css';
import { nurses } from '../../json/nurses';
import dropDownArrow from '../../images/selectChevron.svg';


export const NurseDropdown = (props) => {
	const [content, setContent] = useState('Choose a nurse');
	const [currentNurseIndex, setCurrentNurseIndex] = useState(0);
	const [clickCount, setClickCount] = useState(0);
	const [showDefaultArrow, setShowDefaultArrow] = useState(true);

	useEffect(() => {
		setContent(
			<div className='chosenNurseDiv d-flex justify-content-between'>
				<div className='currentSelectedNurseDropDown'>
					<img
						className='nurseImage'
						src={nurses[currentNurseIndex].image}
						alt='nurse'
					/>
					<p onClick={(e) => e.bubbles} className='nurseText'>
						{' '}
						{nurses[currentNurseIndex].firstName}{' '}
						{nurses[currentNurseIndex].lastName}{' '}
					</p>
				</div>{' '}
				<img
					id='nurseDropDownSelectChevron'
					src={dropDownArrow}
					alt=''></img>
			</div>
		);
		setShowDefaultArrow(false);

		if (props === null) {
		} else {
			props.selectedNurse(currentNurseIndex);
			props.setNurseContent(currentNurseIndex)
			props.tempNurse(clickCount);
		}
	}, [clickCount]);

	useEffect(() => {
		props.setNurseContent(content)
		clickCount === 0
			? setContent(
					<div className='chosenNurseDiv d-flex justify-content-between'>
						<div className='currentSelectedNurseDropDown'>
							<p style={{paddingLeft: "7%"}} className='defaultOptionNurseDropDown'>
								{' '}
								Choose a nurse{' '}
							</p>
						</div>{' '}
						<img
							id='nurseDropDownSelectChevron'
							src={dropDownArrow}
							alt=''></img>
					</div>
			  )
			: setContent(
					<div className='chosenNurseDiv d-flex justify-content-between'>
						<div className='currentSelectedNurseDropDown'>
							<img
								className='nurseImage'
								src={nurses[currentNurseIndex].image}
								alt='nurse'
							/>
							<p onClick={(e) => e.bubbles} className='nurseText'>
								{' '}
								{nurses[currentNurseIndex].firstName}{' '}
								{nurses[currentNurseIndex].lastName}{' '}
							</p>
						</div>{' '}
						<img
							id='nurseDropDownSelectChevron'
							src={dropDownArrow}></img>
					</div>
			  );
	}, []);

	return (
		<>
			
				<button
					className='btn nurseDropButton'
					type='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					{content}
				</button>
				<div
					className='dropdown-menu nurseDropDownContainer '
					aria-labelledby='dropdownMenuButton'>
					{nurses.map((data, key) => {
						return (
							<div
								onClick={() => {
									setCurrentNurseIndex(key);
									props.setNurseContent(content)
									setClickCount(clickCount + 1);
								}}
								className='nurseDiv'
								key={key}>
								<img
									className='nurseImage'
									src={data.image}
									alt='nurse'
								/>
								<p
									onClick={(e) => e.bubbles}
									className='nurseText'>
									{' '}
									{data.firstName} {data.lastName}
								</p>
							</div>
						);
					})}
				</div>
			
		</>
	);
};


NurseDropdown.defaultProps = {
	setNurseContent:() => {},
	tempNurse:() => {}
}