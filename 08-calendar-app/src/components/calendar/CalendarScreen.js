import { useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import NavBar from 'components/ui/NavBar';
import { messages } from 'components/utils/calendar-messages-es';

import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import composer from './composer';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Profiler } from 'react';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = ({ openModalAction, events }) => {
	const [ lastView, setLastView ] = useState(
		localStorage.getItem('lastView') || 'month',
	);

	const onDoubleClick = useCallback(() => {
		openModalAction();
	}, []);

	const onSelect = useCallback(e => {
		console.log({ select: e });
	}, []);

	const onViewChange = e => {
		setLastView(e);
		localStorage.setItem('lastView', e);
	};

	const eventStyleGetter = (event, start, end, isSelected) => ({
		backgroundColor: 'blue',
		borderRadius: 0,
		opacity: 0.7,
		display: 'block',
	});

	return (
		<div className="calendar-screen">
			<NavBar />

			<Calendar
				localizer={localizer}
				events={events}
				messages={messages}
				startAccessor="start"
				endAccessor="end"
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChange}
				view={lastView}
				eventPropGetter={eventStyleGetter}
				components={{
					events: CalendarEvent,
				}}
			/>
			<CalendarModal />
		</div>
	);
};

export default composer(CalendarScreen);
