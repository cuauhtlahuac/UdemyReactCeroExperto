import React, { useReducer } from 'react';

import AppRouter from 'routers/AppRouter';
import { AuthContext } from 'contexts/authContext';
import { authReducer } from 'reducers/authReducer';

const init = () =>
	JSON.parse(localStorage.getItem('user')) || { logged: false };

const HeroesApp = () => {
	const [ user, dispatch ] = useReducer(authReducer, {}, init);

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};

export default HeroesApp;
