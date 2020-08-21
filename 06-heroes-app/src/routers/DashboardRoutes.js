import React, { Fragment } from 'react';
import Navbar from 'components/ui/NavBar';
import { Switch, Route } from 'react-router-dom';
import DCScreen from 'components/dc/DCScreen';
import MarvelScreen from 'components/marvel/MarvelScreen';

const DashboardRoutes = () => {
	return (
		<Fragment>
			<Navbar />
			
				<Switch>
					<Route path="/dc" component={ DCScreen } exact/>
					<Route path="/marvel" component={ MarvelScreen } exact/>
					<Route path="/" component={ ()=> <h1>Heroes</h1> } exact/>
				</Switch>
			 
		</Fragment>
	);
};

export default DashboardRoutes;
