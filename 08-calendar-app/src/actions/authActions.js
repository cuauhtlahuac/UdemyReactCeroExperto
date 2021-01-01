import types from 'types';

export const startLogin = (email, password) => ({
	type: types.authStartLogin,
	payload: { email, password },
});

export const authLoginDone = (uid, name) => ({
	type: types.authLoginDone,
	payload: { uid, name },
});

export const startRegister = payload => {
	const {
		registerName: name,
		registerEmail: email,
		registerPassword: password,
	} = payload;

	return {
		type: types.authRegistering,
		payload: { name, email, password },
	};
};
