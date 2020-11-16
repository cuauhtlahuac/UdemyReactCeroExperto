import { testReducer } from 'reducers/testReducer';
import { uiReducer } from 'reducers/uiReducer';
import { calendarReducer } from 'reducers/calendarReducer';

const { combineReducers } = require('redux');

const reducers = combineReducers({
	test: testReducer,
	ui: uiReducer,
	calendar: calendarReducer,
});

export default reducers;
