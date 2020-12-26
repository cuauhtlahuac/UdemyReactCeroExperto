import { uiReducer } from 'reducers/uiReducer';
import { calendarReducer } from 'reducers/calendarReducer';
import { authReducer } from 'reducers/authReducer';

const { combineReducers } = require('redux');

const reducers = combineReducers({
	ui: uiReducer,
	calendar: calendarReducer,
	auth: authReducer,
});

export default reducers;
