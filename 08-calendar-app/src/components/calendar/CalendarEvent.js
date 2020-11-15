import React from 'react';

const CalendarEvent = ({ event }) => {
  const { title } = event;
	return (
		<div>
			<span>{title}</span>      
		</div>
	);
};

export default CalendarEvent;
