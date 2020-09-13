import { types } from 'types/types';
import { firebase, googleAuthProvider } from 'firebase/firebase-config';
import Swal from 'sweetalert2';

import {
	uiRemoveErrorAction,
	uiSetErrorAction,
	uiStartLoading,
	uiFinishLoading,
} from 'actions/ui';

export const startLoginEmailPassword = (email, password) => {
	return async dispatch => {
		try {
			dispatch(uiStartLoading());
			const { user } = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			dispatch(loginAction(user.uid, user.displayName));
			dispatch(uiRemoveErrorAction());
			dispatch(uiFinishLoading());
		} catch (err) {
			dispatch(uiSetErrorAction('- ' + err));
			Swal.fire('Error!', `${err.message}`, 'error');
			dispatch(uiFinishLoading());
		}
	};
};

export const startGoogleLogin = () => {
	return dispatch => {
		firebase.auth().signInWithPopup(googleAuthProvider).then(({ user }) => {
			const { uid, displayName } = user;
			dispatch(loginAction(uid, displayName));
		});
	};
};

export const startRegisterWithFormData = (email, password, name) => {
	return dispatch => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				try {
					await user.updateProfile({
						displayName: name,
					});

					dispatch(loginAction(user.uid, user.displayName));
					dispatch(uiRemoveErrorAction());
				} catch (err) {
					dispatch(uiSetErrorAction('- ' + err));
				}
			})
			.catch(err => {
				dispatch(uiSetErrorAction('- ' + err));
				Swal.fire('Error!', `${err.message}`, 'error');
			});
	};
};

export const signOut = () => {
	return async dispatch => {
		try {
			await firebase.auth().signOut();
			dispatch(logoutAction());
		} catch (err) {
			Swal.fire('Error!', `${err.message}`, 'error');
		}
	};
};

export const loginAction = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const logoutAction = () => ({
	type: types.logout,
});
