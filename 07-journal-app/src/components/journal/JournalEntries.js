import React from 'react';

import JournalEntry from './JournalEntry';
import { useSelector } from 'react-redux';

const JournalEntries = () => {
	const { list } = useSelector(state => state.notes);

	return (
		<div className="journal__entries">
			{list.map(note => <JournalEntry key={note.id} {...note} />)}
		</div>
	);
};

export default JournalEntries;
