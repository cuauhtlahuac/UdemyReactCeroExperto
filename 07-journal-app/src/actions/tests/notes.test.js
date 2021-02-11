import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startNewNoteAction } from 'actions/notes';

describe('notes actions tests', () => {
	const middlewares = [ thunk ];
	const mockStore = configureStore(middlewares);

	test('should create a new note', async () => {
		// Initialize mockstore with empty state
		const initialState = {
			auth: {
				uid: 'EOKODK5564',
			},
			notes: { list: [] },
		};

		const store = mockStore(initialState);

		await store.dispatch(startNewNoteAction()); // async task needs await

		// Test if your store dispatched the expected actions
		const actions = store;
		console.log(actions.getState());
		console.log(actions.getActions());
	});
});
