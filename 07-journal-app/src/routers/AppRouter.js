import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { firebase } from 'firebase/firebase-config';
import JournalScreen from 'components/journal/JournalScreen';

import AuthRouter from './AuthRouter';
import { useDispatch } from 'react-redux';
import { loginAction } from 'actions/auth';

const AppRouter = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			// es un observable
			if (user && user.uid) {
				dispatch(loginAction(user.uid, user.displayName));
			}
		});
	}, []);

	return (
		<Router>
			<Switch>
				<Route path="/auth" component={AuthRouter} />

				<Route path="/" component={JournalScreen} exact />

				<Route path="/" component={() => <h1>Not Found</h1>} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
