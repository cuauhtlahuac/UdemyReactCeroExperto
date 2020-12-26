import produce from 'immer';

const initialState = {
	checking: true, // para mantener al usuario si ya está autenticado
	uid: null,
	name: null,
};

export const authReducer = produce((draft, action) => {
	switch (action.type) {
		default:
			return;
	}
}, initialState);
