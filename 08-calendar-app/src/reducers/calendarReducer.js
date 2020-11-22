import produce from 'immer';

import { types, uniqueTypes } from 'types';

const initialState = {
	events: [],
	activeEvent: null,
};

export const calendarReducer = produce((draft, action) => {
	switch (action.type) {
		case types[uniqueTypes.eventAddNew]:
			draft.events.push(action.payload);
			return;
		case types[uniqueTypes.eventSetActive]:
			draft.activeEvent = action.payload;
			return;
		case types[uniqueTypes.cleanActiveEvent]:
			draft.activeEvent = initialState.activeEvent;
			return;
		default:
			return;
	}
}, initialState);
