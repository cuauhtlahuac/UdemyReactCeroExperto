import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import LoginScreen from 'components/auth/LoginScreen';
import CalendarScreen from 'components/calendar/CalendarScreen';
import { authChecking } from 'actions/authActions';

const AppRouter = () => {
	const dispatch = useDispatch();
	const { checked, checking } = useSelector(state => state.auth);

	useEffect(() => {
		dispatch(authChecking(checked));
	}, [checked]);

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
