import { useState, useEffect } from 'react';

export const useForm = (initialState = {}) => {
	const [ values, setValues ] = useState(initialState);
	const [ current, setCurrent ] = useState();

	useEffect(
		() => {

			if (current) {
				document.querySelector(
					`#simpleFormWithHooks [for=${current}]`,
				).style.color = 'limegreen';
			}
		},
		[ current ],
	);

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
		setCurrent(target.name);
	};

	return [ values, handleInputChange ];
};
