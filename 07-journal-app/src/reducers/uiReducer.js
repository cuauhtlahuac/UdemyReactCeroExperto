import { types } from 'types/types';

const initialState = {
	loading: false,
	msgError: null,
};

export const uiReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.uiSetError:
			return {
				...state,
				msgError: payload,
			};
		case types.uiRemoveError:
			return {
				...state,
				msgError: null,
			};

		default:
			return state;
	}
};
