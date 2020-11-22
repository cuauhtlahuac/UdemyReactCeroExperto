export const uniqueTypes = {
	uiOpenModal: Symbol('ui/open-modal'),
	uiCloseModal: Symbol('ui/close-modal'),
	eventSetActive: Symbol('event/set-active'),
	eventAddNew: Symbol('event/add-new'),
	cleanActiveEvent: Symbol('event/clean-active-event'),
};

export const types = {
	[uniqueTypes.uiOpenModal]: 'ui/open-modal',
	[uniqueTypes.uiCloseModal]: 'ui/close-modal',
	[uniqueTypes.eventSetActive]: 'event/set-active',
	[uniqueTypes.eventAddNew]: 'event/add-new',
	[uniqueTypes.cleanActiveEvent]: 'event/clean-active-event',
};
