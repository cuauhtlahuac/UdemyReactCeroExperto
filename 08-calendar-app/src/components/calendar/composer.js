import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';

import { closeModalAction, openModalAction } from 'actions/uiActions';
import { eventSetActiveAction, eventAddNewAction, cleanActiveEvent } from 'actions/eventsActions';

import { modalOpenSelector, eventsSelector, eventActiveSelector } from './selectors';

const mapStateToProps = state => {
	return {
		modalOpen: modalOpenSelector(state),
		events: eventsSelector(state),
		activeEvent: eventActiveSelector(state),
	};
};

const mapDispatchToProps = {
	cleanActiveEvent,
	closeModalAction,
	eventAddNewAction,
	eventSetActiveAction,
	openModalAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
