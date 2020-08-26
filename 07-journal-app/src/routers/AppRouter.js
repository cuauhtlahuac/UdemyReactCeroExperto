import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import AuthRouter from './AuthRouter';
import JournalScreen from 'components/journal/JournalScreen';

const AppRouter = props => {
	return (
			<Router>
				<Switch>
					<Route path="/auth" component={AuthRouter} />

					<Route path="/" component={JournalScreen} exact />

					<Route path="/" component={()=><h1>Not Found</h1>} />
				</Switch>
			</Router>
	);
};

export default AppRouter;
