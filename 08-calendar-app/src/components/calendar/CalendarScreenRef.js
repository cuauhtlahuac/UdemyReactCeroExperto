import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import NavBar from 'components/ui/NavBar';
import { messages } from 'components/utils/calendar-messages-es';

import CalendarEvent from './CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [
	{
		title: 'cumpleaños',
		start: moment().toDate(),
		end: moment().add(2, 'days').toDate(),
		bgcolor: '#fa09f5',
	},
];

const eventStyleGetter = (event, start, end, isSelected) => {
	console.log(event, start, end, isSelected);

	const style = {
		backgroundColor: 'blue',
		borderRadius: 0,
		opacity: 0.7,
		display: 'block',
		height: 100,
	};

	return {
		style,
	};
};

const CalendarScreen = () => {
	return (
		<div className="calendar-screen">
			<NavBar />

			<Calendar
				localizer={localizer}
				events={events}
				messages={messages}
				startAccessor="start"
				endAccessor="end"
				eventPropGetter={eventStyleGetter}
				components={{
					events: CalendarEvent,
				}}
			/>
		</div>
	);
};

export default CalendarScreen;
