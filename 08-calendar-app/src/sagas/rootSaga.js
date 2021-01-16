import { all } from 'redux-saga/effects';

import authSaga from 'sagas/authSaga';
import calendarSaga from 'sagas/calendarSaga';

export default function* rootSaga() {
	yield all([ authSaga(), calendarSaga() ]);
}