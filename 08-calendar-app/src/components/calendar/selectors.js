import { createSelector } from 'reselect';

const getUiState = state => state.ui;
const getModalOpen = state => state.ui.modalOpen;
const getEvents = state => state.calendar.events;

export const uiSelector = createSelector([ getUiState ], ui => {
	return ui;
});

export const modalOpenSelector = createSelector([ getModalOpen ], modalOpen => {
	return modalOpen;
});

export const eventsSelector = createSelector([ getEvents ], events => {
	return events;
});
