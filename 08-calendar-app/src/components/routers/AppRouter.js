import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from 'components/auth/LoginScreen';
import CalendarScreen from 'components/calendar/CalendarScreen';

const AppRouter = () => {
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
