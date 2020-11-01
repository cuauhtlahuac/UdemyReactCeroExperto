cimport React from 'react';

alendarconst CalendarEvent = ({ event }) => {
	console.log({ event });
  const { title, name, extendedProps} = event;
  const { user = {} } = extendedProps;
	return (
		<div style={{ height: 100 }}>
			<span>{title}</span>
			<strong> - {user.name || ''}</strong>
		</div>
	);
};

export default CalendarEvent;
