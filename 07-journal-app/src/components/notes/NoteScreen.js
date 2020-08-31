import React from 'react';

import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes_title-input"
				/>

				<textarea
					placeholder="what happened today"
					className="notes__textarea"
				/>

				<div className="notes__image">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F845w8O4T9v8%2Fmaxresdefault.jpg&f=1&nofb=1"
						alt="img"
					/>
				</div>
			</div>
		</div>
	);
};

export default NoteScreen;
