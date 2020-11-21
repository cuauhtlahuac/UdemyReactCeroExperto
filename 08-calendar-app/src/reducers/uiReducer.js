import produce from 'immer';

import { types, uniqueTypes } from 'types';

const initialState = { modalOpen: false };

export const uiReducer = produce((draft, action) => {
	switch (action.type) {
		case types[uniqueTypes.uiOpenModal]:
			draft.modalOpen = true;
			return;

		case types[uniqueTypes.uiCloseModal]:
			draft.modalOpen = false;
			return;
		default:
			return;
	}
}, initialState);
