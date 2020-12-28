import { put, takeEvery, all } from 'redux-saga/effects';

import { types, uniqueTypes } from 'types';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
	console.log('Hello Sagas!');
}

function* startLogin() {
  yield delay(1000);
	yield console.log('skoskos');
}

function* watchIncrementAsync() {
	yield takeEvery(types[uniqueTypes.authStartLogin], startLogin);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* authSaga() {
	yield all([ helloSaga(), watchIncrementAsync() ]);
}
