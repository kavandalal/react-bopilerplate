import { CHANGE_NAME, CHANGE_EMAIL, CHNAGE_MOBILE } from './user.types';

export const changeName = (payload) => {
	return {
		type: CHANGE_NAME,
		payload: payload,
	};
};

export const changeEmail = (payload) => {
	return {
		type: CHANGE_EMAIL,
		payload: payload,
	};
};

export const changeMobile = (payload) => {
	return {
		type: CHNAGE_MOBILE,
		payload: payload,
	};
};
