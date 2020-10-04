import React from 'react';
import { Provider } from 'react-redux';
import 'animate.css';

import AppRouter from 'routers/AppRouter';

import { store } from 'store/store';

import 'styles/styles.scss';

const JournalApp = () => {
	return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
	);
};

export default JournalApp;
