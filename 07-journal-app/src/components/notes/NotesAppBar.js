import React from 'react';
import moment from 'moment';

const NotesAppBar = ({ handleSaveNote }) => {
	return (
		<div className="notes__app-bar">
			<span>{moment().format('dddd D, MMMM YYYY')}</span>
			<div>
				<button className="btn">Picture</button>

				<button className="btn" onClick={handleSaveNote}>
					Save
				</button>
			</div>
		</div>
	);
};

export default NotesAppBar;
