import React from 'react';
import logoAssignED from '../images/Group 15.png';
import user from '../images/Group 12.svg';
import menu from '../images/HamburgerMenu.svg';
import people from '../images/people.svg';
import plus from '../images/plus.svg';
import mapWithPin from '../images/mapWithPin.svg';
import rewind from '../images/rewind.svg';
import '../css/MainNavBar.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min.js';

export const MainNavBar = () => {
    return (
        <>
        
        <nav className="navbar mainNav">
        <img className="logo image" src={logoAssignED} alt="assigned logo"></img>
        <div className="mainDiv">
            <p className="userInfo" > Taylor Brereton</p>
            <div className="userImageBorder"><img className="userImage" src={user} alt="user"></img></div>
            <span className="dropdown">
                <button className="btn userInfo" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img  className="image userInfo" src={menu} alt="Hamburger menu toggle"></img>
                </button>
                <div  className="dropdown-menu menuBox dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <div className="navItemBox">
                        <div className="dropdown-item"> 
                            <img className="navItem" src={plus}/>
                            <a className=" navItem" href="#">Create Assignment</a>
                        </div>
                        <div className="dropdown-item">
                            <img className="navItem" src={mapWithPin}/>   
                            <a className=" navItem" href="#">Map View</a>
                        </div >
                        <div className="dropdown-item">
                            <img className="navItem" src={rewind}/>
                            <a className=" navItem" href="#">Assignment History</a>
                        </div>
                        <div className="dropdown-item">
                            <img className="navItem" src={people}/>
                            <a className=" navItem" href="#">Create/ Edit View</a>
                        </div>
                    </div>
                </div>
            </span>
        </div>
        </nav>
        </>
    );
}