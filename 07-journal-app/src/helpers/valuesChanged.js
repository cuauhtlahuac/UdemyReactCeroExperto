export const activeNoteValuesChanged = values => {
	let currentValues = { ...values };

	if (values.hasOwnProperty('originalNote')) {
		if (
			currentValues.originalNote.body &&
			Boolean(
				currentValues.originalNote.body.localeCompare(currentValues.body) !== 0,
			)
		) {
			currentValues = { ...currentValues, changed: true };
		} else if (
			currentValues.originalNote.title &&
			Boolean(
				currentValues.originalNote.title.localeCompare(currentValues.title) !==
					0,
			)
		) {
			currentValues = { ...currentValues, changed: true };
		} else if (
			currentValues.originalNote.title &&
			Boolean(
				currentValues.originalNote.url.localeCompare(currentValues.url) !== 0,
			)
		) {
			currentValues = { ...currentValues, changed: true };
		}
	}

	return currentValues;
};
