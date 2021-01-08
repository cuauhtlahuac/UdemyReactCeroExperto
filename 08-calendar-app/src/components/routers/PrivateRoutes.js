import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
	const handleAuth = props => {
		if (isAuthenticated) {
			return <Component {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	};

	return <Route component={handleAuth} {...rest} />;
};

export default PrivateRoutes;