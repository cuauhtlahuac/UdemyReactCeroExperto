import produce from 'immer';
import types from 'types';

const initialState = {
	checked: true, // para mantener al usuario si ya está autenticado
	checking: false,
	uid: null,
	name: null,
};

export const authReducer = produce((draft, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.authLoginDone:
			draft = { checking: false, ...payload };

		case types.authChecked:
			draft.checking = false;

		case types.authChecking:
			draft.checking = true;
			draft.checked = false;

		default:
			return;
	}
}, initialState);
