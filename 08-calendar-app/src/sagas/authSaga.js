import { put, takeLatest, all } from 'redux-saga/effects';

import types from 'types';
import { noTokenFetch } from 'utils/fetch';

function* startLogin(action) {
	const { email, password } = action.payload;

	const data = yield noTokenFetch('auth', { email, password }, 'POST');

	yield console.log('data', data);
}

function* watchStartLogin() {
	yield takeLatest(types.authStartLogin, startLogin);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* authSaga() {
	yield all([ watchStartLogin() ]);
}
