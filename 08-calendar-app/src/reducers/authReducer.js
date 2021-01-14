import produce from 'immer';
import types from 'types';

const initialState = {
	checked: true,
	checking: false,
	uid: null,
	name: null,
};

export const authReducer = produce((draft, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.authLoginDone:
			return { ...draft, ...payload, checking: false, checked: true };

		case types.authChecked:
			draft.checking = false;
			draft.checked = payload;
			return;

		case types.authChecking:
			draft.checking = true;
			return;

		case types.authLogout:
			return { checking: false };

		default:
			return;
	}
}, initialState);
