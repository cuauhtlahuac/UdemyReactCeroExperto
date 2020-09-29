export const activeNoteValuesChanged = values => {
	let currentValues = { ...values };

	if (values.hasOwnProperty('originalNote')) {
		if (
			currentValues.originalNote.body >= 0 &&
			Boolean(
				currentValues.originalNote.body.localeCompare(currentValues.body) !== 0,
			)
		) {
			currentValues = { ...currentValues, changed: true };
		} else if (
			currentValues.originalNote.title.length >= 0 &&
			Boolean(
				currentValues.originalNote.title.localeCompare(currentValues.title) !==
					0,
			)
		) {
			currentValues = { ...currentValues, changed: true };
		} else if (
			currentValues.originalNote.url &&
			currentValues.originalNote.url.length >= 0 &&
			Boolean(
				currentValues.originalNote.url.localeCompare(currentValues.url) !== 0,
			)
		) {
			currentValues = { ...currentValues, changed: true };
		}
	}

	return currentValues;
};
