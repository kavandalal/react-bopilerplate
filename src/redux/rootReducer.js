import { combineReducers } from 'redux';

import counter from './counter/counter.reducer';
import user from './user/user.reducer.js';

export default combineReducers({
	counter: counter,
	user: user,
});
