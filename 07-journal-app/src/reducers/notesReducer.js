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

		case types.notesUpdated:
			const newList = [...state.list];

			newList[payload.index] = payload.note;

			return {
				...state,
				list: newList,
			};

		case types.notesLoad:
			return {
				...state,
				list: payload,
			};

		case types.notesDelete:
			const delList = state.list.filter((note) => {
				return payload.id !== note.id
			})
			return {
				...state,
				list: delList,
				active: null,
			}

		case types.notesLogoutAndClean:
			return {
				list: [],
				active: null,
			}

		default:
			return state;
	}
};
