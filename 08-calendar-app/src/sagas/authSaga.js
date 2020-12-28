import { put, takeLatest, all } from 'redux-saga/effects';

import types from 'types';

function* startLogin(action) {
	const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1')
	yield console.log('data', {data});
	yield console.log('action', action);
}

function* watchStartLogin() {
	yield takeLatest(types.authStartLogin, startLogin);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* authSaga() {
	yield all([ watchStartLogin() ]);
}
