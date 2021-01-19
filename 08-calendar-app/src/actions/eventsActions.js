import simplyTypes, { types, uniqueTypes } from 'types';

export const eventStartAddNewAction = () => ({
	type: simplyTypes.eventStartAddNew,
});

export const eventAddNewTriggerAction = event => ({
	type: simplyTypes.eventAddNewTrigger,
	payload: event,
});

export const eventAddNewSuccessAction = event => ({
	type: simplyTypes.eventAddNewSuccess,
	payload: event,
});

export const eventAddNewErrorAction = () => ({
	type: simplyTypes.eventAddNewError,
});

export const loadAllEventsAction = events => ({
	type: simplyTypes.loadAllEvents,
	payload: events,
});

export const eventSetActiveAction = event => ({
	type: types[uniqueTypes.eventSetActive],
	payload: event,
});

export const cleanActiveEvent = () => ({
	type: types[uniqueTypes.cleanActiveEvent],
});

export const saveActiveEvent = event => ({
	type: types[uniqueTypes.saveActiveEvent],
	payload: event,
});

export const deleteEvent = () => ({
	type: types[uniqueTypes.deleteEvent],
});
