import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/CalendarDropDown.css';
import dropDownArrow from '../images/selectChevron.svg';
import YearMonthForm from '../components/DropDownCalendar';

export const CalendarDropDown = (props) => {
	const [content, setContent] = useState('Choose a date');
	const [clickCount, setClickCount] = useState(0);
	const [showDefaultArrow, setShowDefaultArrow] = useState(true);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);

	const onChange = (dates) => {
		const { start, end } = dates;
		setStartDate(start);
		setEndDate(end);
		console.log(dates.start);
		console.log(startDate);
		console.log(endDate);
	};

	useEffect(() => {
		setShowDefaultArrow(false);

		if (props === null) {
		} else {
		}
	}, [clickCount]);

	useEffect(() => {
		if (props === null) {
		} else {
			setContent(
				<div className='chosenCalendarDiv d-flex justify-content-between'>
					<div className='currentSelectedCalendarDropDown'>
						<p className='defaultOptionCalendarDropDown'>
							{' '}
							Choose a date{' '}
						</p>
					</div>{' '}
					<img
						id='calendarDropDownSelectChevron'
						src={dropDownArrow}></img>
				</div>
			);
		}
	}, []);

	return (
		<>
			<span className=''>
				<button
					className='btn calendarDropButton '
					type='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					{content}
				</button>
				<div
					onClick={(e) => e.stopPropagation()}
					className='dropdown-menu calendarDropDownContainer '
					aria-labelledby='dropdownMenuButton'>
					<YearMonthForm
						setStartDate={(newStartDate) => props.setStartDate(newStartDate)}
						setEndDate={(newEndDate) => props.setEndDate(newEndDate)}
						parentSetDate={(newDate) => setContent(newDate)}
					/>
				</div>
			</span>
		</>
	);
};
