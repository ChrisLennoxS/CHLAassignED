import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import '../css/LoginModal.css';
import logoAssignED from '../images/Group 15.png';
import logoCHLA from '../images/CHLA 1.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { nurses } from '../json/nurses.js';
import { CurrentUser } from '../components/CurrentUserContext';
import {Link, Redirect, useHistory} from 'react-router-dom';

const userInfo = [
	{
		email: 'nurse',
		password: 'password',
	},
	{
		email: 'chargeNurse',
		password: 'password',
	},
];

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: #fafafa;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalWrapper = styled.div`
	width: 582px;
	height: 714px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

export const LoginModal = () => {
	const emailRef = document.getElementById('emailInput');
	const passwordRef = document.getElementById('passwordInput');
	const { value, setValue } = useContext(CurrentUser);
	let history = useHistory();

	const [userInput, setUserInput] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const userChecker = (loginEmail) => {
		const input = nurses.find(
			(obj) => Object.values(obj).indexOf(loginEmail) > -1
		);

		return input;
	};

	const loginUser = () => {
		history.push('/map-view')
	}

	useEffect(() => {
		console.log("please work this time " + value.firstName)
	},[])

	const loginCheck = () => {
		setError('');
		emailRef.style.borderColor = 'black';
		passwordRef.style.borderColor = 'black';
		if (
			userChecker(userInput.email) !== undefined &&
			userInput.password === 'password'
		) {
			{console.log("The og val is " + value.firstName)}
			{console.log(userChecker(userInput.email))}
			//setValue(userChecker(userInput.email))
			{console.log("The new value is " + value)}

			setError(
				<div
					className='errorDiv'
					style={{ backgroundColor: '#5DB94C' }}>
					<p>Success! Logging you in.</p>
				</div>
			);
			
			setTimeout(() => {
				loginUser()
				
				//window.location.href = '/map-view';
			}, 1500);
		} else if (userInput.password !== 'password') {
			setError(
				<div className='errorDiv'>
					<p>Password Incorrect. Please try again</p>
				</div>
			);
			passwordRef.style.borderColor = 'red';
			console.log('Password Incorrect. Please try again');
			return (
				<div className='errorDiv'>
					Password Incorrect. Please try again
				</div>
			);
		} else if (
			(userChecker(userInput.email) === undefined &&
				userInput.password !== 'password') ||
			(userChecker(userInput.email) === undefined &&
				userInput.password === 'password')
		) {
			setError(
				<div className='errorDiv'>
					<p>Invalid Inputs. Please try again</p>
				</div>
			);
			console.log('Invalid Inputs. Please try again');
			emailRef.style.borderColor = 'red';
			passwordRef.style.borderColor = 'red';
			return <div>Invalid Inputs. Please try again</div>;
		}
	};

	useEffect(() => {
		setTimeout(() => {
			
			if (error === <div>Success! Logging you in.</div>) {
			}
			setError('');
		}, 3000);
	}, [error]);

	useEffect(() => {
		if (userInput.email.length === 0 || userInput.password.length === 0) {
			document.getElementById('loginModalSignInButton').disabled = true;
		} else {
			document.getElementById('loginModalSignInButton').disabled = false;
		}
	}, [userInput]);

	return (
		<>
			<Background>
				<ModalWrapper>
					<div className='container mx-auto'>
						<img
							className='assignedLogo content'
							src={logoAssignED}
							alt='assignED Logo'
						/>
						<label
							className='modalContent inpLabel'
							htmlFor='email'>
							Email
						</label>
						<input
							id='emailInput'
							className='modalContent'
							type='text'
							name='email'
							onChange={(e) =>
								setUserInput({
									...userInput,
									email: e.target.value,
								})
							}></input>
						<label
							className='modalContent inpLabel'
							htmlFor='password'>
							Password
						</label>
						<input
							id='passwordInput'
							className='modalContent'
							type='password'
							name='password'
							onChange={(e) =>
								setUserInput({
									...userInput,
									password: e.target.value,
								})
							}></input>
						{error}
						<div className='modalContent signIn'>
							<button
								id='loginModalSignInButton'
								onClick={loginCheck}
								className='float-right btn btn-success '>
								Sign In
							</button>
						</div>
						<p className='modalContent content'>
							Need Help?{' '}
							<a href='assigned@email.com'> assigned@email.com</a>
						</p>
						<img
							className='modalContent content'
							src={logoCHLA}
							alt='CHLA Logo'
						/>
					</div>
				</ModalWrapper>
			</Background>
		</>
	);
};
