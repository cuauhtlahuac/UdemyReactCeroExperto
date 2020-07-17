import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
	return (
		<Fragment>
			<h1>CounterApp</h1>
			<h2> {value} </h2>
		</Fragment>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired
};

export default CounterApp;
