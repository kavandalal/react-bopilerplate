import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header() {
	const navigate = useNavigate();
	const handleLogout = () => {
		Cookies.remove('token');
		localStorage.clear();
		navigate('login', { replace: true });
	};
	return (
		<div>
			<div>
				<Link to='home'>Home (201)</Link>
			</div>
			<div>
				<Link to='setting'>Setting (202)</Link>
			</div>
			<div>
				<Link to='admin'>Admin (203)</Link>
			</div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Header;
