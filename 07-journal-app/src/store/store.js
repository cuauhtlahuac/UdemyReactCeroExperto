import { createStore, combineReducers } from 'redux';

import { authReducer } from 'reducers/authReducer';

const reducers = combineReducers({
	auth: authReducer,
});

/* esta es la fuente única de la verdad */
export const store = createStore(reducers);
