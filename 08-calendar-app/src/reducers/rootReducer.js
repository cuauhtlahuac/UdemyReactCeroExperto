import { testReducer } from 'reducers/testReducer';
import { uiReducer } from 'reducers/uiReducer';

const { combineReducers } = require('redux');

const reducers = combineReducers({
	test: testReducer,
	ui: uiReducer,
});

export default reducers;
