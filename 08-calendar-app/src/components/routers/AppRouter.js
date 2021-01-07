import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import LoginScreen from 'components/auth/LoginScreen';
import CalendarScreen from 'components/calendar/CalendarScreen';
import { authChecking } from 'actions/authActions';

const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authChecking());
	}, []);

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" component={CalendarScreen} exact />

					<Route path="/login" component={LoginScreen} exact />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
