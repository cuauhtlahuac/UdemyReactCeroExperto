import { put, takeLatest, all } from 'redux-saga/effects';

import types from 'types';
import { noTokenFetch } from 'utils/fetch';
import { authLoginDone } from 'actions/authActions';

function* startLogin(action) {
	const { email, password } = action.payload;

	const body = yield noTokenFetch('auth', { email, password }, 'POST');

	const { name, uid, ok, token } = body;

	if (ok) {
		localStorage.setItem('token', token);
		localStorage.setItem('token-init-date', new Date().getTime());
		yield put(authLoginDone(uid, name));
	} else {
		console.log('error');
	}
}

function* watchStartLogin() {
	yield takeLatest(types.authStartLogin, startLogin);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* authSaga() {
	yield all([ watchStartLogin() ]);
}
