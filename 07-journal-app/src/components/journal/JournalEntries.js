import React from 'react';

import JournalEntry from './JournalEntry';
import { useSelector } from 'react-redux';

const JournalEntries = () => {
	const { list } = useSelector(state => state.notes);

	return (
		<div className="journal__entries">
			{
				list.map(
					(note, index) => (
				<JournalEntry key={note.id} {...note} index={index} />
					)
				)
			}
		</div>
	);
};

export default JournalEntries;
