import simpleTypes, { types, uniqueTypes } from 'types';

export const eventStartAddNewAction = () => ({
	type: simpleTypes.eventStartAddNew,
});

export const eventAddNewTriggerAction = event => ({
	type: simpleTypes.eventAddNewTrigger,
	payload: event,
});

export const eventAddNewSuccessAction = event => ({
	type: simpleTypes.eventAddNewSuccess,
	payload: event,
});

export const eventAddNewErrorAction = () => ({
	type: simpleTypes.eventAddNewError,
});

export const eventAddNewAction = event => ({
	type: types[uniqueTypes.eventAddNew],
	payload: event,
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
