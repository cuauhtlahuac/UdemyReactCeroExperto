import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';

import { closeModalAction, openModalAction } from 'actions/uiActions';
import { authLogout } from 'actions/authActions';
import { eventAddNewTriggerAction } from 'actions/eventsActions';
import {
	eventSetActiveAction,
	eventStartAddNewAction,
	eventAddNewAction,
	cleanActiveEvent,
	saveActiveEvent,
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
	eventAddNewAction,
	eventSetActiveAction,
	openModalAction,
	saveActiveEvent,
	deleteEvent,
	onLogout: authLogout,
	eventAddNewTriggerAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
