import { types, uniqueTypes } from 'types';

export const eventStartAddNewAction = event => ({
	type: types[uniqueTypes.eventStartAddNew],
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
