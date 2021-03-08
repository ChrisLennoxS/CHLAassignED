import React, { useEffect, useState }  from 'react';
import '../css/RoomDropDown.css';
import 'bootstrap/dist/css/bootstrap.css';
import { floorRooms } from '../json/rooms';
import dropDownArrow from '../images/selectChevron.svg';




export const RoomDropDown = (props) => {
    const [content, setContent] = useState("Choose a room")
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0)
    const [clickCount, setClickCount] = useState(0)
    
    
    

    useEffect(() => {
        
        
        setContent(<div className="chosenRoomDiv d-flex justify-content-between" ><div><p onClick={(e) => e.bubbles} className="roomText"> {floorRooms[currentRoomIndex].room}: {floorRooms[currentRoomIndex].numOfBeds}</p></div><img id="roomDropDownSelectChevron" src={dropDownArrow}></img></div>)
        
    }, [clickCount])

    useEffect(() => {
        
        (props.selectedRoom == null) ? 
            setContent(<div className="chosenRoomDiv d-flex justify-content-between" ><div><p  className="roomText">Choose a room</p></div><img id="roomDropDownSelectChevron" src={dropDownArrow}></img></div>)
            : setContent(<div className="chosenRoomDiv d-flex justify-content-between" ><div><p onClick={(e) => e.bubbles} className="roomText"> {floorRooms[props.selectedRoom].room}: {floorRooms[props.selectedRoom].numOfBeds}</p></div><img id="roomDropDownSelectChevron" src={dropDownArrow}></img></div>);
        
        
    }, [])



    return (
        <>
            <span className="">
                            <button className=" roomDropButton " type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             {content} 
                            </button>
                            <div  className="dropdown-menu dropDownContainer " aria-labelledby="dropdownMenuButton">
                                {floorRooms.map((data, key) => {
                                        return (
                                            <div  onClick={(e) => { setCurrentRoomIndex(key); setClickCount(clickCount+1)}} className="roomChoiceDiv" key={key}><p onClick={(e) => e.bubbles} className="roomText"><span className="boldedText"> {data.room}: </span>{data.numOfBeds}</p></div>
                                        );
                                    })}
                            </div>
                            
                        </span>
        </>
    );
}