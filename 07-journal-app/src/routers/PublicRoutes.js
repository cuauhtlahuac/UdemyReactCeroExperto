import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
	const handleAuth = props => {
		if (!isAuthenticated) {
			return <Component {...props} />;
		} else {
			return <Redirect to="/" />;
		}
	};

	return <Route component={handleAuth} {...rest} />;
};

export default PublicRoutes;
