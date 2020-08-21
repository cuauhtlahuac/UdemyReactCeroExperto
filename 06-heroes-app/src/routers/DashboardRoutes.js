import React, { Fragment } from 'react';
import Navbar from 'components/ui/NavBar';
import { Switch, Route } from 'react-router-dom';

const DashboardRoutes = () => {
	return (
		<Fragment>
			<Navbar />
			
				<Switch>
					<Route path="pepitas/dc" component={() => <h1>Not Found</h1>} exact />
					<Route path="/pepitas/marvel" component={() => <h1>Marvel</h1>} exact />
				</Switch>
			 
		</Fragment>
	);
};

export default DashboardRoutes;
