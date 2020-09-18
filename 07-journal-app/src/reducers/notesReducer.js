import { types } from 'types/types';

const initialState = {
	list: [],
	active: null,
};

export const notesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.notesActive:
			return {
				...state,
				active: {
					...payload,
				},
			};

		case types.notesLoad:
			return {
				...state,
				list: payload,
			};

		default:
			return state;
	}
};
