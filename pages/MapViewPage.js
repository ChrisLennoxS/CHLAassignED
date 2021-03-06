import React from 'react';

import '../css/MapViewPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {MainNavBar} from '../components/MainNavBar';
import { MainFooter} from '../components/MainFooter';

import '../css/RoomHistoryPage.css';
import { Link } from 'react-router-dom';
import Group2 from '../images/Group 2.png'
import Group3 from '../images/Group 3.png'
import Group4 from '../images/Group 4.png'
import Group5 from '../images/Group 5.png'
import Group6 from '../images/Group 6.png'
import plusImage from '../images/plusImage.svg'
import { CreateAssignmentModal } from '../components/CreateAssignmentModal';



export const MapViewPage = () => {

    

    return (
        <>
        <MainNavBar ></MainNavBar>
        <CreateAssignmentModal id="createAssignmentModal"></CreateAssignmentModal>
        <div  id="outermostDiv" className="container d-grid gap-3">
            <div className="row align-items-center d-flex justify-content-around">
                <div className="row d-flex justify-content-around">
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomOneSevenEight "><p>Room 1</p><img className="roomImg" src={Group2}></img></div></Link>
                        
                    </div>
                    <div className="roomDiv d-flex justify-content-around">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomTwoThree "><p>Room 2</p><img className="roomImg" src={Group2}></img></div></Link>
                        <Link to="/create-assignment"><div className="rooms roomAssign roomTwoThree "><p>Room 3</p><img className="roomImg" src={Group2}></img></div></Link>
                    </div>
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomFourSix rightAlignedRooms"><p>Room 4</p><img className="roomImg" src={Group2}></img></div></Link>
                    </div> 
                </div>
                <div id="middleRowDiv" className="row d-flex justify-content-between align-items-center">
                    <div id="circleDiv" className="roomOneSevenEight align-self-center">
                        <div id="circleRoom" className="rooms roomAssign align-self-center"></div>
                    </div>
                    <div className="centerSpace"></div>
                    <div className="">
                        <Link to="/create-assignment"><div id="roomFive" className="rooms roomAssign rightAlignedRooms"><p>Room 5</p><img id="roomFiveImage" className="roomImg" src={Group2}></img></div></Link>
                    </div>    
                </div>
                <div className="row">
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomOneSevenEight roomAssign"><p>Room 8</p><img className="roomImg" src={Group2}></img></div></Link>
                    </div>
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomOneSevenEight"><p>Room 7</p><img className="roomImg" src={Group2}></img></div></Link>
                    </div>
                    <div className="roomDiv">
                        <Link to="/create-assignment"><div className="rooms roomAssign roomFourSix rightAlignedRooms"><p>Room 6</p><img className="roomImg" src={Group2}></img></div></Link>
                    </div> 
                </div>
            </div>
        </div>
        
        <MainFooter></MainFooter>
        
        </>
    )

}

