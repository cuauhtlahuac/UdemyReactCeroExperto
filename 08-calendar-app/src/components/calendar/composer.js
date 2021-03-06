import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';

import { closeModalAction } from 'actions/uiActions';
import { authLogout } from 'actions/authActions';
import {
	eventStartAddNewAction,
	eventAddNewTriggerAction,
	startEditEventAction,
	eventSetActiveAction,
	cleanActiveEvent,
	editEventTriggerAction,
	eventDeleteTrigger,
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
	eventAddNewTriggerAction,
	startEditEventAction,
	eventSetActiveAction,
	editEventTriggerAction,
	eventDeleteTrigger,
	onLogout: authLogout,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
