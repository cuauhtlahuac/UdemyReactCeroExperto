import React from 'react';
import PropTypes from 'prop-types';

export default function PrimeraApp({ saludo }) {
	return (
		<React.Fragment>
			<h1>{saludo}</h1>
		</React.Fragment>
	);
}

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired
};
