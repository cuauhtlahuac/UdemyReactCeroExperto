import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from 'contexts/authContext';
import LoginScreen from 'components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => {

	const { user } = useContext(AuthContext)
	
	return (
		<Router>
			<div>
				<Switch>
					<Route
						path="/login" 
						component={ LoginScreen } 
						exact
					/>

					<PrivateRoute 
						path="/" 
						component={ DashboardRoutes }
						isAuthenticated={ user.logged }
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
