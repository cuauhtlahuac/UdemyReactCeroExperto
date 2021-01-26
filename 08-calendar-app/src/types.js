export const uniqueTypes = {
	uiOpenModal: Symbol('ui/open-modal'),
	uiCloseModal: Symbol('ui/close-modal'),

	eventSetActive: Symbol('event/set-active'),

	eventStartAddNew: Symbol('event/start-add-new'),
	eventAddNewTrigger: Symbol(),
	eventAddNewSuccess: Symbol(),
	eventAddNewError: Symbol(),

	eventStartEdit: Symbol('event/start-edit-event'),
	eventEditTrigger: Symbol(),
	eventEditSuccess: Symbol(),
	eventEditError: Symbol(),

	loadAllEvents: Symbol('event/load-all-events'),

	cleanActiveEvent: Symbol('event/clean-active-event'),
	saveActiveEvent: Symbol('event/save-active-event'),
	
	eventDeleteTrigger: Symbol(),
	eventDeleteSuccess: Symbol(),
	eventDeleteError: Symbol(),
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

	[uniqueTypes.eventStartAddNew]: 'event/start-add-new',
	[uniqueTypes.eventAddNewTrigger]: 'event/add-new-trigger',
	[uniqueTypes.eventAddNewSuccess]: 'event/add-new-success',
	[uniqueTypes.eventAddNewError]: 'event/add-new-error',

	[uniqueTypes.eventStartEdit]: 'event/start-edit-event',
	[uniqueTypes.eventEditTrigger]: 'event/edit-event-trigger',
	[uniqueTypes.eventEditSuccess]: 'event/edit-event-success',
	[uniqueTypes.eventEditError]: 'event/edit-event-error',

	[uniqueTypes.loadAllEvents]: 'event/load-all-events',

	[uniqueTypes.cleanActiveEvent]: 'event/clean-active-event',
	[uniqueTypes.saveActiveEvent]: 'event/save-active-event',

	[uniqueTypes.eventDeleteTrigger]: 'event/trigger-delete-event',
	[uniqueTypes.eventDeleteSuccess]: 'event/success-delete-event',
	[uniqueTypes.eventDeleteError]: 'event/error-delete-event',
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
	eventStartAddNew: types[uniqueTypes.eventStartAddNew],
	eventAddNewTrigger: types[uniqueTypes.eventAddNewTrigger],
	eventAddNewSuccess: types[uniqueTypes.eventAddNewSuccess],
	eventAddNewError: types[uniqueTypes.eventAddNewError],

	eventStartEdit: types[uniqueTypes.eventStartEdit],
	eventEditTrigger: types[uniqueTypes.eventEditTrigger],
	eventEditSuccess: types[uniqueTypes.eventEditSuccess],
	eventEditError: types[uniqueTypes.eventEditError],

	loadAllEvents: types[uniqueTypes.loadAllEvents],

	eventDeleteTrigger: types[uniqueTypes.eventDeleteTrigger],
	eventDeleteSuccess: types[uniqueTypes.eventDeleteSuccess],
	eventDeleteError: types[uniqueTypes.eventDeleteError],
	deleteEvent: types[uniqueTypes.deleteEvent],

	authChecking: types[uniqueTypes.authChecking],
	authChecked: types[uniqueTypes.authChecked],
	authStartLogin: types[uniqueTypes.authStartLogin],
	authLoginDone: types[uniqueTypes.authLoginDone],
	authRegistering: types[uniqueTypes.authRegistering],
	authTokenRenew: types[uniqueTypes.authTokenRenew],
	authLogout: types[uniqueTypes.authLogout],
};

export default simplyTypes;
