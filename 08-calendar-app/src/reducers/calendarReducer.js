import produce from 'immer';
import moment from 'moment'

import { types, uniqueTypes } from 'types';

const initialState = {
	events: [
		{
			title: 'cumpleaños',
			start: moment().toDate(),
			end: moment().add(2, 'hours').toDate(),
			bgcolor: '#fa09f5',
			user: {
				_id: '123',
				name: 'Francis',
			},
		},
	],
	activeEvent: null,
};

export const calendarReducer = produce((draft, action) => {
	switch (action.type) {
	}
}, initialState);
