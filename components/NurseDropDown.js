import React, { useEffect, useState }  from 'react';
import '../css/NurseDropDown.css';
import 'bootstrap/dist/css/bootstrap.css';
import { nurses } from '../json/nurses'


export const NurseDropdown = () => {
    const [content, setContent] = useState("Choose a nurse")

//console.log(e.currentTarget)}

    return (
        <>
            <span className="dropdown">
                            <button className="btn dropButton dropDownCal" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {content}
                            </button>
                            <div  className="dropdown-menu dropDownContainer dropDownCalContainer" aria-labelledby="dropdownMenuButton">
                                {nurses.map((data, key) => {
                                        return (
                                            <div  onClick={(e) => setContent=(e.currentTarget)} className="nurseDiv" key={key}><img className="nurseImage" src={data.image} alt="nurse image"/><p onClick={(e) => e.bubbles} className="nurseText"> {data.firstName} {data.lastName}</p></div>
                                        );
                                    })}
                            </div>
                        </span>
        </>
    );
}