import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import exitButton from '../images/iconfinder_icons_exit_1564505 1.svg';
import '../css/CreateAssignmentModal.css';



const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(94,94,94,255);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 448px;
    height: 388px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    
`

export const CreateAssignmentModal = () => {
    return(
    <>  
        <Background>
        
            <ModalWrapper >
                <div className="container mx-auto outerBox">
                    <div className="header">
                        <p className="modalHeader">Create Assignment</p>
                        <button type="button" className="btn-close closeButton" aria-label="Close"><img src={exitButton}></img></button>
                    </div>
                    <select className="form-select defaultOption" aria-label="Default select example">
                        <option defaultValue>Choose a nurse</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select defaultOption" aria-label="Default select example">
                        <option defaultValue>Choose a room</option>
                        <option className="selectOption" value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="modalContent assignButton"><button className="float-right btn btn-success">Assign</button></div>
                    
                </div>
            </ModalWrapper>
            
        </Background>
    </>
    );
}

