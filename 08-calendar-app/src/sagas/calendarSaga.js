import { put, takeLatest, select, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import types from 'types';
import { openModalAction } from 'actions/uiActions';
import { eventAddNewSuccessAction, loadAllEventsAction } from 'actions/eventsActions';

import { tokenFetch } from 'utils/fetch';
import { getErrorsMsgs } from 'utils/getErrors';

const eventEndPoint = 'events';

function* loadAllCalendarEvents() {
	const response = yield tokenFetch(eventEndPoint);

  yield put(loadAllEventsAction(response.events))
}

function* loadEventsAtStart() {
	yield takeLatest(types.authLoginDone, loadAllCalendarEvents);
}

function* eventStartAddNew() {
	yield put(openModalAction());
}

function* eventAddNew(action) {
	const event = action.payload;

	try {
		const response = yield tokenFetch(eventEndPoint, event, 'POST');

		if (response && response.ok) {
			const { uid, name } = yield select(state => state.auth);

			let newEvent = response.event;

			newEvent.user = {
				uid,
				name,
			};
			yield put(eventAddNewSuccessAction(newEvent));
		} else {
			const msg = yield getErrorsMsgs(response);

			yield Swal.fire('Error', msg, 'error');
		}
	} catch (error) {
		yield Swal.fire('Error', 'Something went wrong', 'error');
	}
}

function* watchCalendar() {
	yield takeLatest(types.eventStartAddNew, eventStartAddNew);
	yield takeLatest(types.eventAddNewTrigger, eventAddNew);
}

export default function* calendarSaga() {
	yield all([ watchCalendar(), loadEventsAtStart() ]);
}
