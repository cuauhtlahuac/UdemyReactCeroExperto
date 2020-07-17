import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
	const [ counter, setCounter ] = useState(value);

	const handleAdd = (e) => {
		// setCounter(counter + 1);
		setCounter((c) => c + 1); // el argumento es el counter state!!!
	};
	const handleSub = (e) => {
		// setCounter(counter + 1);
		setCounter((c) => c - 1); // el argumento es el counter state!!!
	};

	return (
		<Fragment>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>
			<button onClick={handleAdd}>↑1</button>
			<button onClick={() => setCounter(value)}>reset</button>
			<button onClick={handleSub}>↓1</button>
		</Fragment>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired
};

export default CounterApp;
