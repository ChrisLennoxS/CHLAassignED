import React from 'react';

import '../css/MapViewPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {MainNavBar} from '../components/MainNavBar';
import { MainFooter} from '../components/MainFooter';
import '../css/RoomHistoryPage.css';


export const MapViewPage = () => {
    return (
        <>
        <MainNavBar ></MainNavBar>
        <div  id="outermostDiv" className="container d-grid gap-3">
            <div className="row align-items-start d-flex justify-content-around">
                <div className="row d-flex justify-content-around">
                    <div className="roomDiv">
                        <div className="rooms roomOneSevenEight ">room 1</div>
                    </div>
                    <div className="roomDiv d-flex justify-content-between">
                        <div className="rooms roomTwoThree ">room 2</div>
                        <div className="rooms roomTwoThree ">room 3</div>
                    </div>
                    <div className="">
                        <div className="rooms roomFourSix rightAlignedRooms">room 4</div>
                    </div> 
                </div>
                <div id="middleRowDiv d-flex align-items-center" className="row ">
                    <div id="circleDiv" className=" align-self-center">
                        <div id="circleRoom" className="rooms align-self-center"></div>
                    </div>
                    <div className="roomDiv"></div>
                    <div className="">
                        <div id="roomFive" className="rooms rightAlignedRooms">room 5</div>
                    </div>    
                </div>
                <div className="row">
                    <div className="roomDiv">
                        <div className="rooms roomOneSevenEight ">room 8</div>
                    </div>
                    <div className="roomDiv">
                        <div className="rooms roomOneSevenEight">room 7</div>
                    </div>
                    <div className="">
                        <div className="rooms roomFourSix rightAlignedRooms">room 6</div>
                    </div> 
                </div>
            </div>
        </div>
        <MainFooter></MainFooter>
        
        </>
    )

}

