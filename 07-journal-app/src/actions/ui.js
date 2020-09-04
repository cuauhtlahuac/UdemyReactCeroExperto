import { types } from 'types/types';

export const uiSetErrorAction = err => ({
	type: types.uiSetError,
	payload: err,
});

export const uiRemoveErrorAction = () => ({
	type: types.uiRemoveError,
});
