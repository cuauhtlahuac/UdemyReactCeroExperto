import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';

import NavBar from 'components/ui/NavBar';

import CalendarEvent from './CalendarEvent';

import 'moment/locale/es';

moment.locale('es');

const events = [
	{
		title: 'cumpleaños',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fa09f5',
	},
];

const CalendarScreenFull = () => {
	return (
		<div className="calendar-screen">
			<NavBar />
			<FullCalendar
				plugins={[ dayGridPlugin ]}
				initialView="dayGridMonth"
				events={events}
				eventContent={CalendarEvent}
				headerToolbar={{
					left: 'prev,next',
					center: 'title',
					right: 'dayGridDay,dayGridWeek, dayGridMonth',
				}}
			/>
		</div>
	);
};

export default CalendarScreenFull;
