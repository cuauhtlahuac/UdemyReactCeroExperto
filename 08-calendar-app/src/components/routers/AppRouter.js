import { useSelector } from 'react-redux';

import {
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';

import LoginScreen from 'components/auth/LoginScreen';
import CalendarScreen from 'components/calendar/CalendarScreen';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = () => {
	const { checked, checking } = useSelector(state => state.auth);

	if (checking) {
		return <h5>Loading...</h5>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PrivateRoutes
						path="/"
						component={CalendarScreen}
						isAuthenticated={checked}
						exact
					/>

					<PublicRoutes
						path="/login"
						component={LoginScreen}
						isAuthenticated={checked}
						exact
					/>

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
