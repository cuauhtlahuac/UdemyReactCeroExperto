import { Suspense } from 'react';
import AppRouter from 'components/routers/AppRouter';
import { Provider } from 'react-redux';

import store from 'store';

import './i18n';
import './styles.css';

function CalendarApp() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</Suspense>
	);
}

export default CalendarApp;
