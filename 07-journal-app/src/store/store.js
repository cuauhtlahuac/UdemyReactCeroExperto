import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from 'reducers/authReducer';
import { uiReducer } from 'reducers/uiReducer';
import { notesReducer } from 'reducers/notesReducer';	

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	notes: notesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* esta es la fuente única de la verdad */
export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk)), // Con esto ya podemos hacer acciones asíncronas
	);
