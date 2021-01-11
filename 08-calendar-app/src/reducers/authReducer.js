import produce from 'immer';
import types from 'types';

const initialState = {
	checked: false,
	checking: true,
	uid: null,
	name: null,
};

export const authReducer = produce((draft, action) => {
	const { type, payload, other } = action;

	switch (type) {
		case types.authLoginDone:
			return { ...draft, ...payload, checking: false };

		case types.authChecked:
			draft.checking = false;
			draft.checked = payload;
			return;

		case types.authChecking:
			draft.checking = false;
			return;

		case types.authLogout:
			return initialState;

		default:
			return;
	}
}, initialState);
