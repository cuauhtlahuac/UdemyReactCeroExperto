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
						path="/pepitas" 
						component={ DashboardRoutes }
						// Quitar el exact para que respete 
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
