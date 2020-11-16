import produce from 'immer';

import { types } from 'types';

const initialState = { modalOpen: false };

export const uiReducer = produce((draft, action) => {
	switch (action.type) {
		case types.uiOpenModal:
			draft.modalOpen = true;
			return;

		case types.uiCloseModal:
			draft.modalOpen = false;
			return;
	}
}, initialState);
