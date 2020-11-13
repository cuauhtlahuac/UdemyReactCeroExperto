import { types } from 'types';

export const closeModalAction = () => {
	return {
		type: types.uiCloseModal,
	};
};

export const openModalAction = () => {
	return {
		type: types.uiOpenModal,
	};
};
