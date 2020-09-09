import { types } from 'types/types';

export const uiSetErrorAction = err => ({
	type: types.uiSetError,
	payload: err,
});

export const uiRemoveErrorAction = () => ({
	type: types.uiRemoveError,
});

export const uiStartLoading = () => ({
	type: types.uiStartLoading,
});

export const uiFinishLoading = () => ({
	type: types.uiFinishLoading,
});

