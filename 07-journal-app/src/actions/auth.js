import { types } from 'types/types';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => { // lo dará thunk
		setTimeout(() => {

			dispatch( loginAction(123, 'Pedrito') )

		}, 3500);
	}
}

export const loginAction = ( uid, displayName ) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});
