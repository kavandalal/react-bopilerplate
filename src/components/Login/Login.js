import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/home';
	console.log(from);

	const handleSubmit = () => {
		Cookies.set('token', 'randomToken');
		localStorage.setItem('sessionInfo', JSON.stringify({ roles: [201, 203], json: { name: 'kavan', age: '12' } }));
		navigate(from, { replace: true });
	};

	return (
		<div>
			<div>
				Login Page <button onClick={handleSubmit}>Login</button>
			</div>
			<div>
				Landing Page <button onClick={() => navigate('/')}>Landing</button>
			</div>
		</div>
	);
}

export default Login;
