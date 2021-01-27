import { put, takeLatest, select, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import types from 'types';
import { openModalAction } from 'actions/uiActions';
import {
	eventAddNewSuccessAction,
	loadAllEventsAction,
	saveActiveEvent,
	cleanActiveEvent,
	deleteEvent,
} from 'actions/eventsActions';

import { tokenFetch } from 'utils/fetch';
import { getErrorsMsgs } from 'utils/getErrors';
import { prepareEvents, prepareEvent } from 'utils/prepareEvents';
import { genericError } from 'utils/genericErrorAlert';

const eventEndPoint = 'events';

function* loadAllCalendarEvents() {
	const response = yield tokenFetch(eventEndPoint);
	const prepared = yield prepareEvents(response.events);
	yield put(loadAllEventsAction(prepared));
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

			let newEvent = yield prepareEvent(response.event);

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
		yield genericError();
	}
}

function* startEditEvent() {
	yield put(openModalAction());
}

function* eventEditTrigger(action){
	try {
		const event = action.payload;
		const response = yield tokenFetch(`${eventEndPoint}/${event.id}`, event, 'PUT');

		if (response && response.ok) {

			const newEvent = yield prepareEvent(response.event);

			yield put(saveActiveEvent(newEvent));
			
		} else {
			const msg = yield getErrorsMsgs(response);

			yield Swal.fire('Error', msg, 'error');
		}

	} catch (error) {
		yield genericError();
	}
}

function* eventDeleteTrigger(){
	try {
		const event = yield select(state => state.calendar.activeEvent);

		const response = yield tokenFetch(`${eventEndPoint}/${event.id}`, {}, 'DELETE');

		if (response && response.ok) {

			yield put(deleteEvent())
			yield put(cleanActiveEvent());
			
		} else {
			const msg = yield getErrorsMsgs(response);

			yield Swal.fire('Error', msg, 'error');
		}

	} catch (error) {
		yield genericError();
	}
}

function* watchCalendar() {
	yield takeLatest(types.eventStartAddNew, eventStartAddNew);
	yield takeLatest(types.eventAddNewTrigger, eventAddNew);
	yield takeLatest(types.eventStartEdit, startEditEvent);
	yield takeLatest(types.eventEditTrigger, eventEditTrigger);
	yield takeLatest(types.eventDeleteTrigger, eventDeleteTrigger);
}

export default function* calendarSaga() {
	yield all([ watchCalendar(), loadEventsAtStart() ]);
}
