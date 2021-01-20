import moment from 'moment';

export const prepareEvents = events => {
	const newEvents = events.map(event => {
		return {
			...event,
			end: moment(event.end).toDate(),
			start: moment(event.start).toDate(),
		};
	});

	return newEvents;
};
