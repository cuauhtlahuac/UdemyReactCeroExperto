import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	localStorage.setItem('lastPath', rest.location.pathname);

	const handleAuth = props => {
		if (isAuthenticated) {
			return <Component {...props} />;
		}
		return <Redirect to="/login" />;
	};

	return <Route {...rest} component={handleAuth} />;
};

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
	rest: PropTypes.any,
};

export default PrivateRoute;
