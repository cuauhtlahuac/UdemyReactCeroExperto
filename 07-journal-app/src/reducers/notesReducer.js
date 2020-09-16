import { types } from 'types/types';

const initialState = {
	notes: [],
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

		default:
			return state;
	}
};
