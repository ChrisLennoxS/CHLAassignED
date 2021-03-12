import React from 'react';
import chlaLogo from '../images/CHLA 1.svg';
import '../css/MainFooter.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min.js';
import sideBenchLogo from '../images/logo 1.svg';

export const MainFooter = () => {
	return (
		<>
			<nav className='navbar mainFooter navbar-expand-lg navbar-light'>
				<div className='col d-flex justify-content-start'>
					<img
						className='footerItem'
						src={sideBenchLogo}
						alt='SideBench logo'
					/>
					<p id='designedText' className='footerItem'>
						Designed by Sidebench 2021
					</p>
				</div>
				<div className='col d-flex justify-content-center'>
					<p className='footerItem'>Need Help?</p>
					<a
						id='emailLink'
						className='footerItem'
						href='assigned@email.com'>
						assigned@email.com
					</a>
				</div>
				<div className='col d-flex justify-content-end'>
					<img
						className='footerItem'
						src={chlaLogo}
						alt='CHLA logo'
					/>
				</div>
			</nav>
		</>
	);
};
