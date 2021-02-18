import React from 'react';
import styled from 'styled-components';
import '../css/LoginModal.css';
import logoAssignED from '../images/Group 15.png';
import logoCHLA from '../images/CHLA 1.svg';
import 'bootstrap/dist/css/bootstrap.css';


const Background = styled.div`
    width: 100%;
    height: 100%;
    background: #FAFAFA;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 582px;
    height: 714px;
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

export const LoginModal = () => {
    return (
    <>  
        <Background>
           
            <ModalWrapper >
                <div className="container mx-auto">
                    <img className="assignedLogo content" src={logoAssignED} alt='assignED Logo'/>
                    <label  className="modalContent inpLabel" htmlFor='email'>Email</label>
                    <input className="modalContent" type='text' name='email'></input>
                    <label className="modalContent inpLabel" htmlFor='password'>Password</label>
                    <input className="modalContent" type='password'name='password'></input>
                    <div className="modalContent signIn"><button className="float-right btn btn-success ">Sign In</button></div>
                    <p className="modalContent content">Need Help? <a href="assigned@email.com"> assigned@email.com</a></p>
                    <img className="modalContent content" src={logoCHLA} alt='CHLA Logo'/>
                </div>
            </ModalWrapper>
            
        </Background>
    </>
    );
}



