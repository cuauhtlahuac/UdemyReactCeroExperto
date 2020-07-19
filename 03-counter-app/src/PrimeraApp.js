import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CounterApp from './CounterApp';
import { getImagen } from 'base-pruebas/11-async-await';

export default function PrimeraApp({ saludo }) {
	useEffect(() => {
		getImagen();
	}, []);
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
