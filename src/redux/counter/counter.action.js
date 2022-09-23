import { INCREMENT_AGE, DECREMENT_AGE, MULTIPLY_AGE } from './counter.types';
export const incrementAction = () => {
	return {
		type: INCREMENT_AGE,
		payload: null,
	};
};

export const decrementAction = () => {
	return {
		type: DECREMENT_AGE,
		payload: null,
	};
};

export const multipleAction = (total_Data) => {
	return {
		type: MULTIPLY_AGE,
		payload: total_Data,
	};
};
