import { put, takeLatest, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import {types, uniqueTypes} from 'types';

function* eventStartAddNew(){
  yield console.log('tanks');
}


function* watchCalendar() {
	yield takeLatest(types[uniqueTypes.eventAddNew], eventStartAddNew);
}


export default function* authSaga() {
	yield all([ watchCalendar() ]);
}