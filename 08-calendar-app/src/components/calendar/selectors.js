import { createSelector } from 'reselect';

const getUiState = state => state.ui;
const getModalOpen = state => state.ui.modalOpen;
const getCalendar = state => state.calendar;

export const uiSelector = createSelector([ getUiState ], ui => {
	return ui;
});

export const modalOpenSelector = createSelector([ getModalOpen ], modalOpen => {
	return modalOpen;
});

export const eventsSelector = createSelector([ getCalendar ], state => {
	return state.events;
});

export const eventActiveSelector = createSelector([ getCalendar ], state => {
	return state.activeEvent;
});
