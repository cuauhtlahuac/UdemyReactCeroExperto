import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { activateNoteAction } from 'actions/notes';

const JournalEntry = ({ id, index, body, title, date, url }) => {
	const noteDate = moment(date);

	const dispatch = useDispatch();

	const handleActive = () => {
		dispatch(
			activateNoteAction(id, {
				body,
				date,
				index,
				timeStamp: new Date().getTime(),
				title,
				url,
			}),
		);
	};

	return (
		<div className="journal__entry pointer" onClick={handleActive}>
			{url && (
				<div
					className="journal__entry-picture"
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
					}}
				/>
			)}
			<div className="journal__entry-body">
				<section className="journal__entry-section">
					<p className="journal__entry-title">{title}</p>
					<p className="journal__entry-content">{body}</p>
				</section>
				<div className="journal__entry-date-box">
					<span>{noteDate.format('dddd')}</span>
					<h4>{noteDate.format('DD')}</h4>
				</div>
			</div>
		</div>
	);
};

export default JournalEntry;
