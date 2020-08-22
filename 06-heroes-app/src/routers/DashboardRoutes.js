import React, { Fragment } from 'react';
import Navbar from 'components/ui/NavBar';
import { Switch, Route } from 'react-router-dom';
import DCScreen from 'components/dc/DCScreen';
import MarvelScreen from 'components/marvel/MarvelScreen';
import HeroesScreen from 'components/heroes/HeroesScreen';

const DashboardRoutes = () => {
	return (
		<Fragment>
			<Navbar />
			
			<div className="container mt-sm-3 mt-xl-5">
				<Switch>
					<Route path="/dc" component={ DCScreen } exact/>
					<Route path="/marvel" component={ MarvelScreen } exact/>
					<Route path="/" component={ HeroesScreen } exact/>
				</Switch>
			</div>
			 
		</Fragment>
	);
};

export default DashboardRoutes;
