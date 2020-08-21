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
						// va sin exact para no afectar las rutas de Dashboard	
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
