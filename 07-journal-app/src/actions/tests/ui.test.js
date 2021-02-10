const {
	uiSetErrorAction,
	uiRemoveErrorAction,
	uiStartLoading,
	uiFinishLoading,
} = require('actions/ui');
const { types } = require('types/types');

describe('Ui actions tests', () => {
	test('setError action should work', () => {
		const action = uiSetErrorAction({ error: 'F' });

		expect(action).toEqual({ type: types.uiSetError, payload: { error: 'F' } });
	});

	test('uiRemoveErrorAction action should work', () => {
		const action = uiRemoveErrorAction();

		expect(action).toEqual({ type: types.uiRemoveError });
	});
	test('uiStartLoading action should work', () => {
		const action = uiStartLoading();

		expect(action).toEqual({ type: types.uiStartLoading });
	});
	test('uiFinishLoading action should work', () => {
		const action = uiFinishLoading();

		expect(action).toEqual({ type: types.uiFinishLoading });
	});
});
