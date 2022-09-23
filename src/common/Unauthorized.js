import React from 'react';
import { useNavigate } from 'react-router-dom';

function Unauthorized() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<h1>
			Unauthorized
			<div>
				<button onClick={goBack}>Go Back</button>
			</div>
		</h1>
	);
}

export default Unauthorized;
