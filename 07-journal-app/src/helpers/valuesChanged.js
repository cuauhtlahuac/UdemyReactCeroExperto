export const activeNoteValuesChanged = (activeNote, values) => {
	let valuesChanged = false;

	if (activeNote && activeNote.originalNote) {
		valuesChanged =
			activeNote.originalNote.body !== values.body ||
			activeNote.originalNote.title !== values.title ||
			activeNote.originalNote.url !== values.url;
	}

	return valuesChanged;
};
