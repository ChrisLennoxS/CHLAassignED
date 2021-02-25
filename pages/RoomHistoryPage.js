import React, { useEffect, useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MainFooter } from '../components/MainFooter.js';
import { MainNavBar } from '../components/MainNavBar.js';
import greenFile from '../images/greenFile.svg'
import YearMonthForm  from '../components/DropDownCalendar.js';

import { NurseDropdown} from '../components/NurseDropDown'



export const RoomHistoryPage  = () => {

    

    return (
        <>
            <MainNavBar></MainNavBar>
            <div className="container-fluid">
                <div id="contents">
                    
                
                <div><p id="assignmentHistoryText">Assignment History</p></div>
                <div className="dropdownDiv d-flex justify-content-between">
                    <NurseDropdown></NurseDropdown>
                    <select className="form-select roomDropDown dropButtonText" aria-label="Default select example">
                            <option defaultValue>Choose a room</option>
                            <option className="selectOption" value="1">Room 1: 2 Beds</option>
                            <option value="2">Room 2: 1 Bed</option>
                            <option value="3">Room 3: 2 Beds</option>       
                    </select>
                    <span className="dropdown">
                        <button className="btn dropButton dropDownCal" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose a date
                        </button>
                        <div  className="dropdown-menu  dropDownCalContainer" aria-labelledby="dropdownMenuButton">
                                    <div className="cal">
                                        <YearMonthForm />
                                    </div>
                        </div>
                    </span>
                </div>
                
                <button id="runButton" className="float-right btn btn-success">Run</button>
                <div><p id="recentAssign">Recent Assignment History</p><img src={greenFile}/><a id="csvDownloadLink">Download All History CSV</a></div>
                <table id="nurseTable" className="table">
                    <thead>
                        <tr>
                        <th scope="col">Nurse</th>
                        <th scope="col">Room</th>
                        <th scope="col">Date</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>1:21</td>
                        <td>1:21</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>1:21</td>
                        <td>1:21</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>1:21</td>
                        <td>1:21</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <MainFooter></MainFooter>
        </>
    );
}