import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
	const navigate = useNavigate();
	const handelLoginClick = () => {
		navigate('/login');
	};
	const handelRegClick = () => {
		navigate('/register');
	};
	return (
		<div>
			Landing Page
			<button onClick={handelLoginClick}>Login Page</button>
			<button onClick={handelRegClick}>Register Page</button>
		</div>
	);
}

export default Landing;
