import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoAssignED from '../images/Group 15.png';
import user from '../images/Group 12.svg';
import menu from '../images/HamburgerMenu.svg';
import people from '../images/people.svg';
import plus from '../images/plus.svg';
import mapWithPin from '../images/mapWithPin.svg';
import rewind from '../images/rewind.svg';
import logout from '../images/logout.svg';
import '../css/MainNavBar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min.js';
import { CurrentUser } from './CurrentUserContext.js';

/*
 *<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" 
  title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" 
  title="Flaticon">www.flaticon.com</a></div> log out symbol
 */

export const MainNavBar = (props) => {
	const status = useContext(CurrentUser);

	const [steak, setSteak] = useState('tenderloing');

	useEffect(() => {
		console.log('asdsfafdsafds ' + steak);
		setSteak('cherry');

		if (window.location.pathname === '/map-view') {
			document.getElementById('navBarMapViewLink').href =
				'javascript: void(0)';
			document.getElementById('navBarMapViewLink').disabled = true;
			document.getElementById('navBarMapView').style.backgroundColor =
				'#DCE1E2';
		} else if (window.location.pathname === '/room-history') {
			document.getElementById(
				'navBarAssignmentHistoryLink'
			).disabled = true;
			document.getElementById(
				'navBarAssignmentHistory'
			).style.backgroundColor = '#DCE1E2';
			document.getElementById('navBarAssignmentHistoryLink').href =
				'javascript: void(0)';
		}
		console.log('lnlkmk ' + steak);
	}, []);

	return (
		<>
			<nav className='navbar mainNav'>
				<img
					className='logo image'
					src={logoAssignED}
					alt='assigned logo'></img>
				<div className='mainDiv'>
					<p className='userInfo'> Taylor Brereton</p>
					<div className='userImageBorder'>
						<img className='userImage' src={user} alt='user'></img>
					</div>
					<span className='dropdown'>
						<button
							className='btn userInfo'
							type='button'
							id='dropdownMenuButton'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<img
								className='image userInfo'
								src={menu}
								alt='Hamburger menu toggle'></img>
						</button>
						<div
							className='dropdown-menu menuBox dropdown-menu-right'
							aria-labelledby='dropdownMenuButton'>
							<div className='navItemBox'>
								<div className='dropdown-item'>
									<img
										className='navItem'
										src={plus}
										alt=''
									/>
									<Link
										className=' navItem'
										onClick={
											props.hasOwnProperty(
												'showCreateModal'
											)
												? () =>
														props.showCreateModal(
															true
														)
												: null
										}
										href='#'>
										Create Assignment
									</Link>
								</div>
								<div
									className='dropdown-item'
									id='navBarMapView'>
									<img
										className='navItem'
										src={mapWithPin}
										alt=''
									/>
									<Link
										to="/map-view"
										className=' navItem'
										id='navBarMapViewLink'
										href='/map-view'>
										Map View
									</Link>
								</div>
								<div
									className='dropdown-item'
									id='navBarAssignmentHistory'>
									<img
										className='navItem'
										src={rewind}
										alt=''
									/>
									<Link
										to='/room-history'
										id='navBarAssignmentHistoryLink'
										className=' navItem'
										href='/room-history'>
										Assignment History
									</Link>
								</div>
								<div className='dropdown-item'>
									<img
										className='navItem'
										src={people}
										alt=''
									/>
									<Link to='#' className=' navItem' href='#'>
										Create/ Edit View
									</Link>
								</div>
								<div className='dropdown-item'>
									<img
										className='navItem'
										src={logout}
										alt=''
									/>
									<Link
										to='/sign-in'
										className=' navItem'
										href='/sign-in'>
										Log Out
									</Link>
								</div>
							</div>
						</div>
					</span>
				</div>
			</nav>
		</>
	);
};
