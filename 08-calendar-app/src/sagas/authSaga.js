import { put, takeLatest, all } from 'redux-saga/effects';

import types from 'types';
import { calendarFetch } from 'utils/fetch';

function* startLogin(action) {
	const data = yield calendarFetch('events');
	yield console.log('data',  data );
}

function* watchStartLogin() {
	yield takeLatest(types.authStartLogin, startLogin);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* authSaga() {
	yield all([ watchStartLogin() ]);
}
