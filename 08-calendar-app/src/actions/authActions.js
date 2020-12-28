import { types, uniqueTypes } from 'types';

export const startLogin = (email, password) => ({
	type: types[uniqueTypes.authStartLogin],
	payload: { email, password },
});
