import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { fileUploadAction } from 'actions/notes';

const NotesAppBar = ({ handleSaveNote }) => {
	const dispatch = useDispatch();

	const handleUploadPicture = () => {
		document.querySelector('#note_file').click();
	};

	const handleFile = e => {
		const [ file ] = e.target.files;
		console.log(file);
		if (file) {
			dispatch(fileUploadAction(file));
		}
	};

	return (
		<div className="notes__app-bar">
			<span>{moment().format('dddd D, MMMM YYYY')}</span>

			<input
				id="note_file"
				type="file"
				name="file"
				accept="image/*"
				onChange={handleFile}
				style={{ display: 'none' }}
			/>

			<div>
				<button className="btn" onClick={handleUploadPicture}>
					Picture
				</button>

				<button className="btn">Save</button>
			</div>
		</div>
	);
};

export default NotesAppBar;
