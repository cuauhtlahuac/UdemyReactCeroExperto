import { types, uniqueTypes } from 'types';

export const eventAddNewAction = event => ({
	type: types[uniqueTypes.eventAddNew],
	payload: event,
});

export const eventSetActiveAction = event => ({
	type: types[uniqueTypes.eventSetActive],
	payload: event,
});
