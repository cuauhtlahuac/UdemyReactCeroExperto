import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';

import { closeModalAction } from 'actions/uiActions';
import { authLogout } from 'actions/authActions';
import {
	eventStartAddNewAction,
	startEditEventAction,
	eventSetActiveAction,
	cleanActiveEvent,
	editEventTriggerAction,
	deleteEvent,
} from 'actions/eventsActions';

import {
	modalOpenSelector,
	eventsSelector,
	eventActiveSelector,
} from './selectors';

const mapStateToProps = state => {
	return {
		modalOpen: modalOpenSelector(state),
		events: eventsSelector(state),
		activeEvent: eventActiveSelector(state),
		name: state.auth.name,
	};
};

const mapDispatchToProps = {
	cleanActiveEvent,
	closeModalAction,
	eventStartAddNewAction,
	startEditEventAction,
	eventSetActiveAction,
	editEventTriggerAction,
	deleteEvent,
	onLogout: authLogout,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
