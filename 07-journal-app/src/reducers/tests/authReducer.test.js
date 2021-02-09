import { authReducer } from 'reducers/authReducer';
import { types } from 'types/types';

describe('Auth Reducer Tests', () => {
	const state = {
		name: 'Ed',
		password: 'sks565',
		email: 'hola@pk2.com',
	};

	test('should return login state', () => {
		const authState = authReducer(state, {
			type: types.login,
			payload: { uid: '6456454', displayName: 'Ender' },
		});

		expect(authState).toEqual({
			uid: '6456454',
			name: 'Ender',
		});
	});

	test('should return logout state', () => {
		const authState = authReducer(state, { type: types.logout });
		expect(authState).toEqual({});
	});

	test('should return the state', () => {
		const authState = authReducer(state, { type: 'noType' });
		expect(authState).toEqual(state);
	});
});
