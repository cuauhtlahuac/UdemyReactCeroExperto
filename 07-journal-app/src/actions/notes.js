import { db } from 'firebase/firebase-config';
import { types } from 'types/types';

export const startNewNoteAction = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		// vamos a hacer la referencia al documento
		// en el path /{ refiere a la primer coleccion}/{refiere al documento}/{siguiente collection} ... así sucesivamente
		const document = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch( activateNoteAction(document.id, newNote))

	};
};

export const activateNoteAction = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});
