import React from 'react';
import PropTypes from 'prop-types';

const AddNewFab = ({ openModal }) => {
	return (
		<button
      className="btn btn-primary fab"
      onClick={openModal}
    >
			<i className="fas fa-plus" />
		</button>
	);
};

AddNewFab.propTypes = {
	openModal: PropTypes.func,
};

export default AddNewFab;
