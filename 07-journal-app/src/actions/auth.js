import { types } from 'types/types';
import { firebase, googleAuthProvider } from 'firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
	return dispatch => {
		// el dispatch lo da thunk
		setTimeout(() => {
			dispatch(loginAction(123, 'Pedrito'));
		}, 3500);
	};
};

export const startGoogleLogin = () => {
	return dispatch => {
		firebase.auth().signInWithPopup( googleAuthProvider )
		.then( userCred => {
			console.log({userCred}); // Imprimimos los datos del nuevo usuario autenticado!
		});
	};
};

export const loginAction = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});
