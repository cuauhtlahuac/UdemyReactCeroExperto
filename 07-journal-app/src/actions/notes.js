import Swal from 'sweetalert2';
import { db } from 'firebase/firebase-config';

import { types } from 'types/types';
import { loadNotes } from 'helpers/loadNotes';
import { loadFile } from 'helpers/loadFile';
import { activeNoteValuesChanged } from 'helpers/valuesChanged';

export const startNewNoteAction = () => {
	return async (dispatch, getState) => {
		const { auth, notes } = getState();
		const { uid } = auth;
		const { list } = notes;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
			url: null,
		};

		const document = await db.collection(`${uid}/journal/notes`).add(newNote);

		dispatch(saveNewNoteAction(document.id, list.length, newNote));
	};
};

export const saveNewNoteAction = (id, index, newNote) => {
	return dispatch => {
		dispatch(saveNoteAction(index, { ...newNote, id, index }));

		dispatch(
			activateNoteAction(id, {
				...newNote,
				originalNote: newNote,
				index,
			}),
		);

		Swal.fire({
			title: 'Created',
			icon: 'success',
			text: `New Note, put a title and text, then save it`,
		});
	};
};

export const updateNotesAction = (id, index, note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const noteTo = { ...note };

		delete noteTo.id;
		delete noteTo.changed;
		delete noteTo.originalNote;

		await db.collection(`${uid}/journal/notes`).doc(id).update({ ...noteTo });

		dispatch(saveNoteAction(index, { ...noteTo, id }));
		dispatch(activateNoteAction(id, { ...noteTo, originalNote: noteTo }));

		Swal.fire({
			title: 'Saved',
			icon: 'success',
			text: `Note: ${noteTo.title}`,
		});
	};
};

export const startLoadingNotesAction = uid => {
	return async dispatch => {
		const notes = await loadNotes(uid);

		dispatch(loadNotesAction(notes));
	};
};

export const loadNotesAction = notes => ({
	type: types.notesLoad,
	payload: notes,
});

export const saveNoteAction = (index, note) => ({
	type: types.notesUpdated,
	payload: {
		index,
		note,
	},
});

export const activateNoteAction = (id, note) => {
	const newNote = activeNoteValuesChanged(note);
	return {
		type: types.notesActive,
		payload: {
			id,
			...newNote,
		},
	};
};

export const deleteNoteAction = (noteId) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		try {
			await db.collection(`${uid}/journal/notes`).doc(noteId).delete()
			Swal.fire({
				title: 'Note deleted',
				icon: "success",
				timer: 1500,
				allowOutsideClick: false,
				showConfirmButton: false,
			})
		} catch (error) {
			Swal.fire({
				title: 'Something went wrong',
				text: 'Please try again',
				icon: "error",
				timer: 1500,
				allowOutsideClick: false,
				showConfirmButton: false,
			})
		}
	}
}

export const fileUploadAction = file => {
	return async (dispatch, getState) => {
		const { active: activeNote } = getState().notes;
		let fileUrl;
		let urlSuccess = false;

		Swal.fire({
			title: 'Uploading',
			text: 'Please wait',
			allowOutsideClick: false,
			onBeforeOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			fileUrl = await loadFile(file);
			urlSuccess = true;
		} catch (err) {
			throw err;
		}

		if (urlSuccess) {
			dispatch(
				activateNoteAction(activeNote.id, { ...activeNote, url: fileUrl }),
			);
			Swal.close();
		}
	};
};
