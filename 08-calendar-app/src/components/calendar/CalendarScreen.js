import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarScreenFull = () => {
	return (
		<FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" />
	);
};

export default CalendarScreenFull;
