import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import NavBar from 'components/ui/NavBar';
import { messages } from 'components/utils/calendar-messages-es';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
	{
		title: 'cumpleaños',
		start: moment().toDate(),
		end: moment().add(5, 'hours').toDate(),
		bgcolor: '#fa09f5',
	},
];

const CalendarScreen = () => {
	return (
		<div>
			<NavBar />
			<Calendar
				className="calendar-screen"
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				messages={messages}
			/>
		</div>
	);
};

export default CalendarScreen;
