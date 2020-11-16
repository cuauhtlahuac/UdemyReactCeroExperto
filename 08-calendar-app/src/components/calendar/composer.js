import { connect } from 'react-redux';
import { compose } from 'redux';

import { modalOpenSelector } from './selectors';

import { closeModalAction, openModalAction } from 'actions/uiActions';
import { memo } from 'react';

const mapStateToProps = state => {
	return {
		test: state.test,
		modalOpen: modalOpenSelector(state),
	};
};

const mapDispatchToProps = {
	closeModalAction,
	openModalAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
