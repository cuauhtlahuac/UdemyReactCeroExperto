import produce from 'immer';
import types from 'types';

const initialState = {
	checking: true, // para mantener al usuario si ya está autenticado
	uid: null,
	name: null,
};

export const authReducer = produce((draft, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.authLoginDone:
			return (draft = { checking: false, ...payload });

		default:
			return;
	}
}, initialState);
