import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from 'components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route
						path="/login" 
						component={ LoginScreen } 
						exact
					/>

					<Route 
						path="/" 
						component={ DashboardRoutes }
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
