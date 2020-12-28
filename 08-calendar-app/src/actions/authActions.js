import types from 'types';

export const startLogin = (email, password) => ({
	type: types.authStartLogin,
	payload: { email, password },
});

export const authLoginDone = (uid, name) => ({
	type: types.authLoginDone,
	payload: { uid, name },
});
