import { put, takeLatest, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import types from 'types';
import { noTokenFetch } from 'utils/fetch';
import { authLoginDone } from 'actions/authActions';
import { getErrorsMsgs } from 'utils/getErrors';

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
		localStorage.setItem('tokenw', token);
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
	yield watchAuth();
}
