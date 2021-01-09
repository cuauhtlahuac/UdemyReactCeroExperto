import { put, takeLatest, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import types from 'types';
import { noTokenFetch, tokenFetch } from 'utils/fetch';
import { authLoginDone, authChecked } from 'actions/authActions';
import { getErrorsMsgs } from 'utils/getErrors';

function* validateToken() {
	const body = yield tokenFetch('auth/renew');
	const { token, ok, uid, name } = body;
	if (ok) {
		localStorage.setItem('token', token);
		localStorage.setItem('token-init-date', new Date().getTime());
		
		yield put(authChecked(true));
		yield put(authLoginDone(uid, name));
	} else {
		yield put(authChecked(false));
	}
}

function* startLogin(action) {
	const { email, password } = action.payload;

	const body = yield noTokenFetch('auth', { email, password }, 'POST');

	const { name, uid, ok, token } = body;

	if (ok) {
		localStorage.setItem('token', token);
		localStorage.setItem('token-init-date', new Date().getTime());

		yield put(authLoginDone(uid, name));
	} else {
		const msg = yield getErrorsMsgs(body);

		yield Swal.fire('Error', msg, 'error');
	}
}

function* startRegister(action) {
	const body = yield noTokenFetch('auth/register', action.payload, 'POST');

	const { name, uid, ok, token } = body;

	if (ok) {
		localStorage.setItem('token', token);
		localStorage.setItem('token-init-date', new Date().getTime());

		yield put(authLoginDone(uid, name));
	} else {
		const msg = yield getErrorsMsgs(body);

		yield Swal.fire('Error', msg, 'error');
	}
}

function* watchAuth() {
	yield takeLatest(types.authStartLogin, startLogin);
	yield takeLatest(types.authRegistering, startRegister);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* authSaga() {
	yield all([ validateToken(), watchAuth() ]);
}
