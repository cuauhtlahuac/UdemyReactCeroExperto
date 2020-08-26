import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import AuthRouter from './AuthRouter';
import JournalScreen from 'components/journal/JournalScreen';

const AppRouter = props => {
	return (
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/auth">auth</Link>
						</li>
						<li>
							<Link to="/auth/login">Login</Link>
						</li>
						<li>
							<Link to="/auth/register">Register</Link>
						</li>
					</ul>
				</nav>

        <div>
				<Switch>
					<Route path="/auth" component={AuthRouter} />

					<Route path="/" component={JournalScreen} exact />

					<Route path="/" component={()=><h1>Not Found</h1>} />
				</Switch>
        </div>
			</Router>
	);
};

export default AppRouter;
