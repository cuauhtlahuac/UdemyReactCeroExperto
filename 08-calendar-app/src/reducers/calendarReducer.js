import produce from 'immer';
import { findIndex } from 'lodash';

import simpleTypes, { types, uniqueTypes } from 'types';

const initialState = {
	events: [],
	activeEvent: null,
};

export const calendarReducer = produce((draft, action) => {
	switch (action.type) {

		case simpleTypes.eventAddNewTrigger:
			console.log('trigger reducer');
			return;

		case simpleTypes.eventAddNewSuccess:
			console.log('Success');
			return;

		case simpleTypes.eventAddNewError:
			console.log('Error');
			return;

		case types[uniqueTypes.eventSetActive]:
			draft.activeEvent = action.payload;
			return;

		case types[uniqueTypes.cleanActiveEvent]:
			draft.activeEvent = initialState.activeEvent;
			return;

		case types[uniqueTypes.saveActiveEvent]:
			const indexFound = findIndex(draft.events, { id: action.payload.id });
			draft.events[indexFound] = action.payload;
			return;

		case types[uniqueTypes.deleteEvent]:
			draft.events = draft.events.filter(
				event => event.id !== draft.activeEvent.id,
			);
			draft.activeEvent = null;
			return;

		default:
			return;
	}
}, initialState);
