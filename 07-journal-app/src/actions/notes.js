import { db } from 'firebase/firebase-config';
import { types } from 'types/types';
import { loadNotes } from 'helpers/loadNotes';
import { loadFile } from 'helpers/loadFile';
import Swal from 'sweetalert2';

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

export const updateNotesAction = (id, index, note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const noteTo = { ...note };

		delete noteTo.id;

		const document = await db
			.collection(`${uid}/journal/notes`)
			.doc(id)
			.update({ ...noteTo });

		dispatch(saveNoteAction(index, note));

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

export const activateNoteAction = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});

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
