import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CounterApp from './CounterApp';
import { getImagen } from 'base-pruebas/11-async-await';

export default function PrimeraApp({ saludo, subtitulo }) {
	useEffect(() => {
		getImagen();
	}, []);
	return (
		<React.Fragment>
			<h1>{saludo}</h1>
			<p>{subtitulo}</p>
			<CounterApp value={0} />
		</React.Fragment>
	);
}

PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtitulo'
};

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
	subtitulo: PropTypes.string
};
