import React, { useEffect, useState } from 'react';

import NotesAppBar from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'hooks/useForm';
import { updateNotesAction, activateNoteAction } from 'actions/notes';

const NoteScreen = () => {
	const { active: activeNote } = useSelector(state => state.notes);
	const dispatch = useDispatch();

	const [ values, handleInputChange, reset ] = useForm(activeNote);

	const { body, title, url } = values;

	useEffect(
		() => {
			if (activeNote.id !== values.id || activeNote.url !== values.url) {
				reset(activeNote);
			}
		},
		[ activeNote ],
	);

	useEffect(
		() => {
			dispatch(activateNoteAction(values.id, { ...values }));
		},
		[ values ],
	);

	const handleSaveNote = () => {
		dispatch(
			updateNotesAction(values.id, activeNote.index, {
				...values,
			}),
		);
	};

	return (
		<div className="notes__main-content">
			<NotesAppBar handleSaveNote={handleSaveNote} />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes_title-input"
					name="title"
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					placeholder="what happened today"
					className="notes__textarea"
					name="body"
					value={body}
					onChange={handleInputChange}
				/>
				{url && (
					<div className="notes__image">
						<img src={url} alt={title} />
					</div>
				)}
			</div>
		</div>
	);
};

export default NoteScreen;
