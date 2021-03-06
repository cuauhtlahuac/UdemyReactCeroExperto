import { useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import NavBar from 'components/ui/NavBar';
import { messages } from 'utils/calendar-messages-es';
import AddNewFab from 'components/ui/AddNewFab';
import DeleteEventFab from 'components/ui/DeleteEventFab';

import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import composer from './composer';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = ({
	startEditEventAction,
	eventStartAddNewAction,
	events,
	eventSetActiveAction,
	activeEvent,
	eventDeleteTrigger,
	cleanActiveEvent,
	onLogout,
	name,
}) => {
	const [ lastView, setLastView ] = useState(
		localStorage.getItem('lastView') || 'month',
	);

	const onSelect = useCallback(
		e => {
			eventSetActiveAction(e);
		},
		[ eventSetActiveAction ],
	);

	const onDoubleClickEvent = useCallback(
		() => {
			startEditEventAction();
		},
		[ startEditEventAction ],
	);

	const onViewChange = useCallback(
		e => {
			setLastView(e);
			localStorage.setItem('lastView', e);
		},
		[ setLastView ],
	);

	const handleSelectSlot = () => {
		cleanActiveEvent();
	}

	const eventStyleGetter = useCallback(
		(event, start, end, isSelected) => ({
			backgroundColor: 'blue',
			borderRadius: 0,
			opacity: 0.7,
			display: 'block',
		}),
		[],
	);

	const handleDeleteEvent = () => {
		eventDeleteTrigger();
	};

	return (
		<div className="calendar-screen">
			<NavBar name={name} onLogout={onLogout}/>

			<Calendar
				localizer={localizer}
				events={events}
				messages={messages}
				startAccessor="start"
				endAccessor="end"
				onSelectEvent={onSelect}
				onSelectSlot={handleSelectSlot}
				onDoubleClickEvent={onDoubleClickEvent}
				onView={onViewChange}
				view={lastView}
				eventPropGetter={eventStyleGetter}
				components={{
					events: CalendarEvent,
				}}
			/>

			<AddNewFab openModal={eventStartAddNewAction} />
			{!!activeEvent && <DeleteEventFab onDelete={handleDeleteEvent} />}

			<CalendarModal />
		</div>
	);
};

export default composer(CalendarScreen);
