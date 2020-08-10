import React from 'react';

import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {
	const user = {
		id: 6565,
		name: 'Cuauh',
		email: 'cuauh@gmail.com',
	};

	return (
		<UserContext.Provider value={user}>
			<AppRouter />
		</UserContext.Provider>
	);
};

export default MainApp;
