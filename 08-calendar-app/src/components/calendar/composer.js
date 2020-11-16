import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';

import { closeModalAction, openModalAction } from 'actions/uiActions';

import { modalOpenSelector } from './selectors';

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
