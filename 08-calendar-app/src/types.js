export const uniqueTypes = {
	uiOpenModal: Symbol('ui/open-modal'),
	uiCloseModal: Symbol('ui/close-modal'),

	eventSetActive: Symbol('event/set-active'),
	eventAddNew: Symbol('event/add-new'),
	cleanActiveEvent: Symbol('event/clean-active-event'),
	saveActiveEvent: Symbol('event/save-active-event'),
	deleteEvent: Symbol('event/delete-event'),

	authChecking: Symbol('auth/checking login'),
	authChecked: Symbol('auth/login checked'),
	authStartLogin: Symbol('auth/login start'),
	authLoginDone: Symbol('auth/login done'),
	authRegistering: Symbol('auth/registering'),
	authTokenRenew: Symbol('auth/token renew'),
	authLogout: Symbol('auth/logout'),
};

export const types = {
	[uniqueTypes.uiOpenModal]: 'ui/open-modal',
	[uniqueTypes.uiCloseModal]: 'ui/close-modal',

	[uniqueTypes.eventSetActive]: 'event/set-active',
	[uniqueTypes.eventAddNew]: 'event/add-new',
	[uniqueTypes.cleanActiveEvent]: 'event/clean-active-event',
	[uniqueTypes.saveActiveEvent]: 'event/save-active-event',
	[uniqueTypes.deleteEvent]: 'event/delete-event',
	
	[uniqueTypes.authChecking]: 'auth/checking login',
	[uniqueTypes.authChecked]: 'auth/login checked',
	[uniqueTypes.authStartLogin]: 'auth/login start',
	[uniqueTypes.authLoginDone]: 'auth/login done',
	[uniqueTypes.authRegistering]: 'auth/registering',
	[uniqueTypes.authTokenRenew]: 'auth/token renew',
	[uniqueTypes.authLogout]: 'auth/logout',
};

const simplyTypes = {
	authChecking: types[uniqueTypes.authChecking],
	authChecked: types[uniqueTypes.authChecked],
	authStartLogin: types[uniqueTypes.authStartLogin],
	authLoginDone: types[uniqueTypes.authLoginDone],
	authRegistering: types[uniqueTypes.authRegistering],
	authTokenRenew: types[uniqueTypes.authTokenRenew],
	authLogout: types[uniqueTypes.authLogout],
}

export default simplyTypes;
