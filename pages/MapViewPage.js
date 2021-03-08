import React, {useState} from 'react';

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
    const [showCreateAssignmentModal, setShowCreateAssignmentModal] = useState(false)
    const [selectedNurse, setSelectedNurse] = useState(null)
    const [selectedRoom, setSelectedRoom] = useState(null)

    const assignedNurseArray = [
        {"room 1": '../images/Group 2.png'},
        {"room 2": '../images/Group 3.png'},
        {"room 3": '../images/Group 3.png'},
        {"room 4": require('../images/Group 5.png')},
        {"room 5": '../images/Group 3.png'},
        {"room 6": '../images/Group 5.png'},
        {"room 7": '../images/Group 3.png'},
        {"room 8": '../images/Group 5.png'}
        

    ];

    console.log(assignedNurseArray[3]["room 4"])

    return (
        <>
        <MainNavBar showCreateModal={value => setShowCreateAssignmentModal(value)} ></MainNavBar>
        {(showCreateAssignmentModal) ? <CreateAssignmentModal selectedRoom={selectedRoom} showCreateModal={value => setShowCreateAssignmentModal(value)} id="createAssignmentModal"/>: ""}
        <div  id="outermostDiv" className="container d-grid gap-3">
            <div className="row align-items-center d-flex justify-content-around">
                <div className="row d-flex justify-content-around">
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(0)}} className="rooms roomAssign roomOneSevenEight "><p>Room 1</p><img className="roomImg" src={Group2}></img></div>
                        
                    </div>
                    <div className="roomDiv d-flex justify-content-around">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(1)}} className="rooms roomAssign roomTwoThree "><p>Room 2</p><img className="roomImg" src={Group2}></img></div>
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(2)}} className="rooms roomAssign roomTwoThree "><p>Room 3</p><img className="roomImg" src={assignedNurseArray[3]["room 4"]}></img></div>
                    </div>
                    <div className="roomDiv">
                       <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(3)}} className="rooms roomAssign roomFourSix rightAlignedRooms"><p>Room 4</p><img className="roomImg" src={Group2}></img></div>
                    </div> 
                </div>
                <div id="middleRowDiv" className="row d-flex justify-content-between align-items-center">
                    <div id="circleDiv" className="roomOneSevenEight align-self-center">
                        <div id="circleRoom" className="rooms roomAssign align-self-center"></div>
                    </div>
                    <div className="centerSpace"></div>
                    <div className="">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(4)}} id="roomFive" className="rooms roomAssign rightAlignedRooms"><p>Room 5</p><img id="roomFiveImage" className="roomImg" src={Group2}></img></div>
                    </div>    
                </div>
                <div className="row">
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(7)}} className="rooms roomOneSevenEight roomAssign"><p>Room 8</p><img className="roomImg" src={Group2}></img></div>
                    </div>
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(6)}} className="rooms roomAssign roomOneSevenEight"><p>Room 7</p><img className="roomImg" src={Group2}></img></div>
                    </div>
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(5)}} className="rooms roomAssign roomFourSix rightAlignedRooms"><p>Room 6</p><img className="roomImg" src={Group2}></img></div>
                    </div> 
                </div>
            </div>
        </div>
        
        <MainFooter></MainFooter>
        
        </>
    )

}

