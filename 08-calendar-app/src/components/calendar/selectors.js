import { createSelector } from 'reselect';

const getUiState = state => state.ui;
const getModalOpen = state => state.ui.modalOpen;

export const uiSelector = createSelector([ getUiState ], ui => {
	return ui;
});

export const modalOpenSelector = createSelector([ getModalOpen ], modalOpen => {
	return modalOpen;
});
