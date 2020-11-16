export const uniqueTypes = {
	uiOpenModal: Symbol('ui/open-modal'),
	uiCloseModal: Symbol('ui/close-modal'),
};

export const types = {
	[uniqueTypes.uiOpenModal]: 'ui/open-modal',
	[uniqueTypes.uiCloseModal]: 'ui/close-modal',
};
