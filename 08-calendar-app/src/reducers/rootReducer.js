import { uiReducer } from 'reducers/uiReducer';
import { calendarReducer } from 'reducers/calendarReducer';

const { combineReducers } = require('redux');

const reducers = combineReducers({
	ui: uiReducer,
	calendar: calendarReducer,
});

export default reducers;
