import { db } from 'firebase/firebase-config';
import { types } from 'types/types';
import { loadNotes } from 'helpers/loadNotes';

export const startNewNoteAction = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};
		
		const document = await db.collection(`${uid}/journal/notes`).add(newNote);

		dispatch(activateNoteAction(document.id, newNote));
	};
};

export const loadNotesAction = notes => ({
	type: types.notesLoad,
	payload: notes,
});

export const activateNoteAction = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});
