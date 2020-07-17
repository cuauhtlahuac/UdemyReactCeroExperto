import React from 'react';
import PropTypes from 'prop-types';
import CounterApp from './CounterApp';

export default function PrimeraApp({ saludo }) {
	return (
		<React.Fragment>
			<CounterApp value={0} />
		</React.Fragment>
	);
}

PrimeraApp.defaultProps = {
	saludo: 'Saludo por default'
};

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired
};
