import { notesReducer } from 'reducers/notesReducer';

import { types } from 'types/types';

describe('Notes Reducer Tests', () => {
	const initialState = {
		list: [
			{
				id: '7kuD2qmtKD4jUUMBdEAa',
				timeStamp: 1601847538550,
				body: 'sss ijdijdijod',
				title: 'sxxxxssss',
				url: null,
				index: 0,
				date: 1601773750896,
			},
			{
				id: '8kuD2qmtKD4jUUMBdEAa',
				timeStamp: 1601847538550,
				body: 'ijiojd',
				title: 'sxxxxssss',
				url: null,
				index: 1,
				date: 1601773750896,
			},
			{
				id: '9kuD2qmtKD4jUUMBdEAa',
				timeStamp: 1601847538550,
				body: 'opposs',
				title: 'sxxxxssss',
				url: null,
				index: 2,
				date: 1601773750896,
			},
		],
		active: null,
	};

	const note = {
		id: '9kuD2qmtKD4jUUMBdEAa',
		timeStamp: 1601847538550,
		body: 'opposs',
		title: 'sxxxxssss',
		url: null,
		index: 0,
		date: 1601773750896,
	};

	test('should return an initial state', () => {
		const state = notesReducer(initialState, { type: 'noAction' });
		expect(state).toEqual(initialState);
	});

	test('should return an active note', () => {
		const state = notesReducer(initialState, {
			type: types.notesActive,
			payload: note,
		});

		expect(state).toEqual({ ...initialState, active: note });
	});

	test('should update a note', () => {
		const payload = {
			id: '8kuD2qmtKD4jUUMBdEAa',
			timeStamp: 1601847538550,
			body: 'opposs',
			title: 'sxxxxssss',
			url: null,
			index: 0,
			date: 1601773750896,
		};

		const state = notesReducer(initialState, {
			type: types.notesUpdated,
			payload,
		});

		const updatedList = [ initialState.list[0], payload, initialState.list[2] ];
		expect(state).toEqual({ ...initialState, list: updatedList });
	});
});
