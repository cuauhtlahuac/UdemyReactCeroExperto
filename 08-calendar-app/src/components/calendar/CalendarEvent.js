import React from 'react';
import moment from 'moment';

const CalendarEvent = ({ event }) => {
	console.log({ event });
  const { title } = event;
	return (
		<div>
			<span>{title}</span>      
		</div>
	);
};

export default CalendarEvent;
