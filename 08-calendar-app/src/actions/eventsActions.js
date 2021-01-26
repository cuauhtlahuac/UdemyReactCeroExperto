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




export const startEditEventAction = () => ({
	type: simplyTypes.eventStartEdit,
});

export const editEventTriggerAction = event => ({
	type: simplyTypes.eventEditTrigger,
	payload: event,
});

export const editEventSuccessAction = event => ({
	type: simplyTypes.eventEditSuccess,
	payload: event,
});

export const editEventErrorAction = () => ({
	type: simplyTypes.eventEditError,
});



export const saveActiveEvent = event => ({
	type: types[uniqueTypes.saveActiveEvent],
	payload: event,
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



export const eventDeleteTrigger = event => ({
	type: simplyTypes.eventDeleteTrigger,
});

export const eventDeleteSuccess = () => ({
	type: simplyTypes.eventDeleteSuccess,
});

export const eventDeleteError = () => ({
	type: simplyTypes.eventDeleteError,
});

export const deleteEvent = () => ({
	type: simplyTypes.deleteEvent,
});


