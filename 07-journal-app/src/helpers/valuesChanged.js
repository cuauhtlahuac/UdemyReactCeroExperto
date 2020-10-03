export const activeNoteValuesChanged = values => {
	let currentValues = { ...values };

	if (values.hasOwnProperty('originalNote')) {
		if (
			currentValues.originalNote.body.length >= 0 &&
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
		} else if (currentValues.url && currentValues.url.length >= 0)
			if (typeof currentValues.url !== typeof currentValues.originalNote.url) {
				currentValues = { ...currentValues, changed: true };
			} else if (
				Boolean(
					currentValues.originalNote.url.localeCompare(currentValues.url) !== 0,
				)
			) {
				currentValues = { ...currentValues, changed: true };
			}
	}

	return currentValues;
};
