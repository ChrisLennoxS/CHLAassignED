import React, { useEffect, useState }  from 'react';
import '../css/NurseDropDown.css';
import 'bootstrap/dist/css/bootstrap.css';
import { nurses } from '../json/nurses'


export const NurseDropdown = () => {
    return (
        <>
            <span className="dropdown">
                            <button className="btn dropButton dropDownCal" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Choose a nurse
                            </button>
                            <div  className="dropdown-menu dropDownContainer dropDownCalContainer" aria-labelledby="dropdownMenuButton">
                                {nurses.map((data, key) => {
                                        return (
                                            <div className="nurseDiv" key={key}><img className="nurseImage" src={data.image} alt="nurse image"/><p className="nurseText"> {data.firstName} {data.lastName}</p></div>
                                        );
                                    })}
                            </div>
                        </span>
        </>
    );
}