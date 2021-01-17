import { put, takeLatest, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import types from 'types';
import { openModalAction } from 'actions/uiActions';
import { eventAddNewAction } from 'actions/eventsActions';

function* eventStartAddNew() {
	yield put(openModalAction());
}

function* eventAddNew(action) {
	console.log('trigger', {action});
}

function* watchCalendar() {
	yield takeLatest(types.eventStartAddNew, eventStartAddNew);
	yield takeLatest(types.eventAddNewTrigger, eventAddNew);
}

export default function* calendarSaga() {
	yield watchCalendar();
}
