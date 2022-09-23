import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction, multipleAction } from '../../redux/counter/counter.action';
import { changeEmail, changeMobile, changeName } from '../../redux/user/user.action';

function Home() {
	const counterData = useSelector((state) => state.counter);
	const UserData = useSelector((state) => state.user);

	const dispatch = useDispatch();

	function handleAgeInc() {
		dispatch(incrementAction());
	}
	function handleAgeDec() {
		dispatch(decrementAction());
	}
	function handleAgeMul() {
		const multiplier = document.getElementById('ageMultiply').value;
		dispatch(multipleAction(multiplier));
	}

	const handleNameChange = () => {
		const dataHere = document.getElementById('form-name').value;
		dispatch(changeName(dataHere));
	};
	const handleEmailChange = () => {
		const dataHere = document.getElementById('form-email').value;
		dispatch(changeEmail(dataHere));
	};
	const handleMobileChange = () => {
		const dataHere = document.getElementById('form-mobile').value;
		dispatch(changeMobile(dataHere));
	};
	return (
		<div>
			<h1>Home</h1>
			<legend style={{ margin: '2rem', padding: '2rem', border: '2px solid blue' }}>
				<h3>Global States ( REDUX ) </h3>
				<hr />
				<div>
					<p>Counter == {JSON.stringify(counterData)}</p>
					<button onClick={handleAgeInc}>Age Increment</button>
					<button onClick={handleAgeDec}>Age Decrement</button>
					<input type='number' id='ageMultiply' placeholder='Multiply By' />
					<button onClick={handleAgeMul}>Age Multiply By</button>
				</div>
				<hr />
				<div>
					<div>
						<p>User == {JSON.stringify(UserData)}</p>
						<input type='text' placeholder='Enter Name' id='form-name' />
						<button onClick={handleNameChange}> Name Change</button>
					</div>
					<div>
						<input type='text' placeholder='Enter Email' id='form-email' />
						<button onClick={handleEmailChange}> Email Change</button>
					</div>

					<div>
						<input type='text' placeholder='Enter Mobile' id='form-mobile' />
						<button onClick={handleMobileChange}> Mobile Change</button>
					</div>
				</div>
			</legend>
		</div>
	);
}

export default Home;
