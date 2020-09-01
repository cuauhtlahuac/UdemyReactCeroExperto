import { types } from 'types/types';

export const loginAction = ( uid, displayName ) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});
