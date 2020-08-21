import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/ui/NavBar';
import LoginScreen from 'components/login/LoginScreen';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<Switch>
					<Route exact path="/login" component={ LoginScreen } />
					<Route exact path="/" component={ ()=> <h1>Not Found</h1> } />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
