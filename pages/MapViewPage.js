import React from 'react';

import '../css/MapViewPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {MainNavBar} from '../components/MainNavBar';
import { MainFooter} from '../components/MainFooter';

import '../css/RoomHistoryPage.css';
import { Link } from 'react-router-dom';


export const MapViewPage = () => {
    return (
        <>
        <MainNavBar ></MainNavBar>
        <div  id="outermostDiv" className="container d-grid gap-3">
            <div className="row align-items-start d-flex justify-content-around">
                <div className="row d-flex justify-content-around">
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomOneSevenEight ">Room 1</div></Link>
                    </div>
                    <div className="roomDiv d-flex justify-content-between">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomTwoThree ">Room 2</div></Link>
                        <div className="rooms roomAssign roomTwoThree ">Room 3</div>
                    </div>
                    <div className="">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomFourSix rightAlignedRooms">Room 4</div></Link>
                    </div> 
                </div>
                <div id="middleRowDiv d-flex align-items-center" className="row ">
                    <div id="circleDiv" className=" align-self-center">
                        <div id="circleRoom" className="rooms roomAssign align-self-center"></div>
                    </div>
                    <div className="roomDiv"></div>
                    <div className="">
                        <Link to="/create-assignment"><div id="roomFive" className="rooms roomAssign rightAlignedRooms">Room 5</div></Link>
                    </div>    
                </div>
                <div className="row">
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomOneSevenEight roomAssign">Room 8</div></Link>
                    </div>
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomOneSevenEight">Room 7</div></Link>
                    </div>
                    <div className="">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomFourSix rightAlignedRooms">Room 6</div></Link>
                    </div> 
                </div>
            </div>
        </div>
        <MainFooter></MainFooter>
        
        </>
    )

}

