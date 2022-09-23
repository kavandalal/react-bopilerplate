import { INCREMENT_AGE, DECREMENT_AGE, MULTIPLY_AGE } from './counter.types';

const INITIAL_STATE = {
	age: 1,
	currentYear: 2022,
};
const reducer = (state = INITIAL_STATE, action) => {
	console.log('reducer page ====', action, state);
	switch (action.type) {
		case INCREMENT_AGE:
			return { ...state, age: state.age + 1 };
		case DECREMENT_AGE:
			return { ...state, age: state.age - 1 };
		case MULTIPLY_AGE:
			return { ...state, age: state.age * action.payload };
		default:
			return state;
	}
};
export default reducer;
