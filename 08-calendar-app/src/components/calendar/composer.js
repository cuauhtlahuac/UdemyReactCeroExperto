import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';

import { closeModalAction, openModalAction } from 'actions/uiActions';
import { eventSetActiveAction, eventAddNewAction } from 'actions/eventsActions';

import { modalOpenSelector, eventsSelector } from './selectors';

const mapStateToProps = state => {
	return {
		modalOpen: modalOpenSelector(state),
		events: eventsSelector(state),
	};
};

const mapDispatchToProps = {
	eventAddNewAction,
	closeModalAction,
	openModalAction,
	eventSetActiveAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
