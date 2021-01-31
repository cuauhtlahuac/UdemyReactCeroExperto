import { authReducer } from 'reducers/authReducer';

describe('Auth Reducer Tests', () => {
	test('should return an initial state', () => {
    const state = authReducer({}, {type: 'noAction'});
    expect(state).toEqual({})
	});
});
