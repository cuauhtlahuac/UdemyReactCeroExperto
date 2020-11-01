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
		user: {
			_id: '123',
			name: 'Francis'
		}
	},
	{
		title: 'otro evento',
		start: "2020-10-30T20:48:35.277-06:00",
		end: "2020-10-30T21:48:35.277-06:00",
		myProp: "anything"
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
