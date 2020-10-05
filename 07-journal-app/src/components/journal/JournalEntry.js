import React from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import { activateNoteAction, updateNotesAction } from 'actions/notes';

const JournalEntry = ({ id, index, body, title, date, url = null }) => {
	const noteDate = moment(date);

	const dispatch = useDispatch();
	const { active } = useSelector(state => state.notes);

	const noteData = {
		body,
		date,
		index,
		timeStamp: new Date().getTime(),
		title,
		url,
	};

	const originalNote = { ...noteData };

	const activeEntry = Boolean(active && id === active.id);
	const handleActive = () => {
		if (active && !active.saved && active.changed) {
			Swal.fire({
				title: "Note doesn't saved",
				text:
					"You make changes, but it doesn't saved yet, do you want to save your current changes?",
				showConfirmButton: true,
				showDenyButton: true,
				confirmButtonText: `Save`,
				denyButtonText: `Don't save`,
			}).then(({ isConfirmed, isDenied }) => {
				if (isConfirmed) {
					dispatch(updateNotesAction(active.id));
				} else {
					dispatch(activateNoteAction(id, { ...noteData, originalNote }));
				}
			});
		} else {
			dispatch(activateNoteAction(id, { ...noteData, originalNote }));
		}
	};

	return (
		<div
			className={`journal__entry pointer
										animate__animated
										animate__bounceInDown
										${activeEntry && 'entry_active'}`}
			onClick={handleActive}
		>
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
