import React, { useEffect, useState } from 'react';
import '../css/NurseDropDown.css';
import 'bootstrap/dist/css/bootstrap.css';
import { nurses } from '../json/nurses';
import dropDownArrow from '../images/selectChevron.svg';
import { checkPropTypes } from 'prop-types';
import PropTypes from 'prop-types';




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
			
			props.tempNurse(clickCount); 
			
		}
	}, [clickCount]);

	useEffect(() => {
		
			(clickCount === 0)
				? setContent(
						<div className='chosenNurseDiv d-flex justify-content-between'>
							<div className='currentSelectedNurseDropDown'>
								<p className='defaultOptionNurseDropDown'>
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
								<p
									onClick={(e) => e.bubbles}
									className='nurseText'>
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
			<span className=''>
				<button
					className='btn nurseDropButton '
					type='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					{content}
				</button>
				<div
					className='dropdown-menu dropDownContainer '
					aria-labelledby='dropdownMenuButton'>
					{nurses.map((data, key) => {
						return (
							<div
								onClick={(e) => {
									setCurrentNurseIndex(key);
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
			</span>
		</>
	);
};

const nursePropTypes = {
	tempNurse: PropTypes.func
}

NurseDropdown.defaultProps = {
	tempNurse: PropTypes.func
};