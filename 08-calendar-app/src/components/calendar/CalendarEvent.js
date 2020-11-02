import React from 'react';
import moment from 'moment';

const CalendarEvent = ({ event }) => {
	console.log({ event });
  const { title, name, user } = event;
	return (
		<div style={{ height: 100 }}>
			<span>{title}</span>
      
		</div>
	);
};

export default CalendarEvent;
