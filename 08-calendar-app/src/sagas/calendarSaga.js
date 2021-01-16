import { put, takeLatest, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import { types, uniqueTypes } from 'types';
import { openModalAction } from 'actions/uiActions';

function* eventStartAddNew() {
	yield put(openModalAction());
}

function* watchCalendar() {
	yield takeLatest(types[uniqueTypes.eventStartAddNew], eventStartAddNew);
}

export default function* calendarSaga() {
	yield watchCalendar();
}
