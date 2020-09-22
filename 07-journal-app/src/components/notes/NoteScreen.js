import React, { useEffect, useState } from 'react';

import NotesAppBar from './NotesAppBar';
import { useSelector } from 'react-redux';
import { useForm } from 'hooks/useForm';

const NoteScreen = () => {

	const {active: activeNote} = useSelector(state => state.notes);

	const [ values, handleInputChange, reset ] = useForm(activeNote);

	const { body, title, url } = activeNote;

	return (
		<div className="notes__main-content">
			<NotesAppBar />

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

				<div className="notes__image">
					<img src={url} alt={title} />
				</div>
			</div>
		</div>
	);
};

export default NoteScreen;
