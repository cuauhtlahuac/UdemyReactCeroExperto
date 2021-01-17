import { put, takeLatest } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import types from 'types';
import { openModalAction } from 'actions/uiActions';
import { eventAddNewAction } from 'actions/eventsActions';
import { eventAddNewSuccessAction } from 'actions/eventsActions';

import { tokenFetch } from 'utils/fetch';
import { getErrorsMsgs } from 'utils/getErrors';

const eventEndPoint = 'events';

function* eventStartAddNew() {
	yield put(openModalAction());
}

function* eventAddNew(action) {
	const token = localStorage.getItem('token');
	const response = yield tokenFetch(eventEndPoint, action.payload, 'POST');

	if (response && response.ok) {
		console.log({ response });
	} else {
		const msg = yield getErrorsMsgs(response);
		yield Swal.fire('Error', msg, 'error');
	}
}

function* watchCalendar() {
	yield takeLatest(types.eventStartAddNew, eventStartAddNew);
	yield takeLatest(types.eventAddNewTrigger, eventAddNew);
}

export default function* calendarSaga() {
	yield watchCalendar();
}
