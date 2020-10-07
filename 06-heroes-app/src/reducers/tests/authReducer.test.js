const { authReducer } = require('reducers/authReducer');
const { types } = require('types/types');

describe('authReducer tests', () => {
	test('should return initial state', () => {
		const state = authReducer({}, { type: 'idjid', payload: { id: 1 } });
		expect(state).toEqual({});
	});

	test('should authenticate and put the username', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Nino Canun',
				logged: true,
			},
		};
		const state = authReducer({}, action);

		expect(state.logged).toBe(true);
	});

	test('should delete the username and logged in false', () => {
		const action = { type: types.logout };

		const state = authReducer({}, action);

		expect(state.logged).toBe(false);
	});
});
