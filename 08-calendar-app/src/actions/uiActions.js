import { types, uniqueTypes  } from 'types';

export const closeModalAction = () => {
	return {
		type: types[uniqueTypes.uiCloseModal],
	};
};

export const openModalAction = () => {
	return {
		type: types[uniqueTypes.uiOpenModal],
	};
};
