import React, {useEffect, useState} from 'react';

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
import {nurses} from '../json/nurses'



export const MapViewPage = () => {
    const [showCreateAssignmentModal, setShowCreateAssignmentModal] = useState(false)
    const [selectedNurse, setSelectedNurse] = useState(null)
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [clickCount, setClickCount] = useState(0)

    const [roomOneImage, setRoomOneImage] = useState(require('../images/plus.svg'))
    const [roomTwoImage, setRoomTwoImage] = useState(require('../images/plus.svg'))
    const [roomThreeImage, setRoomThreeImage] = useState(require('../images/plus.svg'))
    const [roomFourImage, setRoomFourImage] = useState(require('../images/plus.svg'))
    const [roomFiveImage, setRoomFiveImage] = useState(require('../images/plus.svg'))
    const [roomSixImage, setRoomSixImage] = useState(require('../images/plus.svg'))
    const [roomSevenImage, setRoomSevenImage] = useState(require('../images/plus.svg'))
    const [roomEightImage, setRoomEightImage] = useState(require('../images/plus.svg'))

   

    useEffect(() => {
        if(selectedNurse === null){
            
        }else{
            switch(selectedRoom){
                case(0):
                    setRoomOneImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(1):
                    setRoomTwoImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(2):
                    setRoomThreeImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(3):
                    setRoomFourImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(4):
                    setRoomFiveImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(5):
                    setRoomSixImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(6):
                    setRoomSevenImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
                case(7):
                    setRoomEightImage(nurses[selectedNurse].image)
                    console.log(`the current selected nurse is${selectedRoom}`)
                    break;
            }
        }
        console.log(`the current selected nurse is${selectedNurse}`)
        console.log("room changed")
        
    }, [clickCount])
/*
    useEffect(() =>{
        console.log(`click count is ${clickCount}`)
    }, [clickCount])
*/
    

    return (
        <>
        <MainNavBar parentClickCount={() => setClickCount(clickCount+1)} showCreateModal={(value) => {setShowCreateAssignmentModal(value); setSelectedRoom(null); setSelectedNurse(null)}} ></MainNavBar>
        {(showCreateAssignmentModal) ? <CreateAssignmentModal overrideParentRoomChange={newSelectedRoom => setSelectedRoom(newSelectedRoom)} parentClickCount={() => setClickCount(clickCount+1)} selectedRoom={selectedRoom} selectedNurse={chosenNurse => setSelectedNurse(chosenNurse)} showCreateModal={value => setShowCreateAssignmentModal(value)} id="createAssignmentModal"/>: ""}
        <div id="outermostDiv" className="container d-grid gap-3">
            <div className="row align-items-center d-flex justify-content-around">
                <div className="row d-flex justify-content-around">
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(0)}} className="rooms roomAssign roomOneSevenEight "><p>Room 1</p><img className="roomImg" src={roomOneImage}></img></div>
                        
                    </div>
                    <div className="roomDiv d-flex justify-content-around">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(1)}} className="rooms roomAssign roomTwoThree "><p>Room 2</p><img className="roomImg" src={roomTwoImage}></img></div>
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(2)}} className="rooms roomAssign roomTwoThree "><p>Room 3</p><img className="roomImg" src={roomThreeImage}></img></div>
                    </div>
                    <div className="roomDiv">
                       <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(3)}} className="rooms roomAssign roomFourSix rightAlignedRooms"><p>Room 4</p><img className="roomImg" src={roomFourImage}></img></div>
                    </div> 
                </div>
                <div id="middleRowDiv" className="row d-flex justify-content-between align-items-center">
                    <div id="circleDiv" className="roomOneSevenEight align-self-center">
                        <div id="circleRoom" className="rooms roomAssign align-self-center"></div>
                    </div>
                    <div className="centerSpace"></div>
                    <div className="">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(4)}} id="roomFive" className="rooms roomAssign rightAlignedRooms"><p>Room 5</p><img id="roomFiveImage" className="roomImg" src={roomFiveImage}></img></div>
                    </div>    
                </div>
                <div className="row">
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(7)}} className="rooms roomOneSevenEight roomAssign"><p>Room 8</p><img className="roomImg" src={roomEightImage}></img></div>
                    </div>
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(6)}} className="rooms roomAssign roomOneSevenEight"><p>Room 7</p><img className="roomImg" src={roomSevenImage}></img></div>
                    </div>
                    <div className="roomDiv">
                        <div onClick={() => {setShowCreateAssignmentModal(true); setSelectedRoom(5)}} className="rooms roomAssign roomFourSix rightAlignedRooms"><p>Room 6</p><img className="roomImg" src={roomSixImage}></img></div>
                    </div> 
                </div>
            </div>
        </div>
        
        <MainFooter></MainFooter>
        
        </>
    )

}

