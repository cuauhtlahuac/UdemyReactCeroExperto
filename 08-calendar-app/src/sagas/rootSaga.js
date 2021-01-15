import { all } from 'redux-saga/effects';

import authSagas from 'sagas/authSaga';
import calendarSaga from 'sagas/calendarSaga';

export default function* authSaga() {
	yield all([ authSaga(), calendarSaga() ]);
}