import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { firebase } from 'firebase/firebase-config';

import { useDispatch } from 'react-redux';
import { loginAction } from 'actions/auth';
import JournalScreen from 'components/journal/JournalScreen';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import AuthRouter from './AuthRouter';

const AppRouter = props => {
	const dispatch = useDispatch();

	const [ checking, setChecking ] = useState(true);

	const [ isLogged, setIsLogged ] = useState(false);

	useEffect(
		() => {
			firebase.auth().onAuthStateChanged(user => {
				// es un observable
				if (user && user.uid) {
					// solo usuarios autenticados
					dispatch(loginAction(user.uid, user.displayName));
					setIsLogged(true);
				} else {
					setIsLogged(false);
				}

				setChecking(false);
			});
		},
		[ dispatch, setChecking, setIsLogged ],
	);

	if (checking)
		return (
			<div className="general-center">
				<img src="https://www.downgraf.com/media/2019/05/Loader-animation-principle-freebie.gif" />
			</div>
		);

	return (
		<Router>
			<Switch>
				<PublicRoutes
					path="/auth"
					component={AuthRouter}
					isAuthenticated={isLogged}
				/>

				<PrivateRoutes
					path="/"
					component={JournalScreen}
					isAuthenticated={isLogged}
				/>
			</Switch>
		</Router>
	);
};

export default AppRouter;
