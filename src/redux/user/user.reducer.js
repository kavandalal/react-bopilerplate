import { CHANGE_NAME, CHANGE_EMAIL, CHNAGE_MOBILE } from './user.types';

const INITIAL_STATE = {
	name: 'kavan',
	mobile: 1234512345,
	email: 'kavan@gmai.com',
};
const reducer = (state = INITIAL_STATE, action) => {
	console.log('reducer page ====', action, state);
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.payload };
		case CHANGE_EMAIL:
			return { ...state, email: action.payload };
		case CHNAGE_MOBILE:
			return { ...state, mobile: action.payload };
		default:
			return state;
	}
};
export default reducer;
