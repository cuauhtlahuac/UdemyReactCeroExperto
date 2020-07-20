import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({
	setCategories,
	setCategoryDictionary,
	setSameValue,
	categoryDictionary,
}) {
	const [ inputValue, setInputValue ] = useState('');

	const handleInputValue = e => setInputValue(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();

		const trimmedInputValue = inputValue.trim();

		if (trimmedInputValue && trimmedInputValue.length > 1) {
			setCategoryDictionary(catDic => ({
				...catDic,
				[trimmedInputValue]: trimmedInputValue,
			}));

			if (categoryDictionary.hasOwnProperty(trimmedInputValue)) {
				setSameValue(true);
			} else {
				setCategories(cat => [ trimmedInputValue, ...cat ]);
			}
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				placeholder="category"
				onChange={handleInputValue}
			/>
		</form>
	);
}

export default AddCategory;

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
