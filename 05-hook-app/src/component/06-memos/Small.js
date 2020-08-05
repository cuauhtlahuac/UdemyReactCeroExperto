import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Small = React.memo(({ value }) => {
  console.log('Me volvi a mostrar :(');

  return <small>{value}</small>;
});

export default Small;

Small.propTypes = {
  value: PropTypes.number.isRequired,
};
