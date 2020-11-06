import { useState } from 'react';
import ReactModal from 'react-modal';

import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

const customStyles = {
	content: {
		bottom: 'auto',
		marginRight: '-50%',
		left: '50%',
		right: 'auto',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},
};

ReactModal.setAppElement('#root');

const startDate = moment().minutes(0).seconds(0).add(1, 'hours').toDate();

const CalendarModal = props => {
	const [ dateStart, setDateStart ] = useState(startDate);
	const [ dateEnd, setDateEnd ] = useState(
		moment(startDate).add(1, 'hour').toDate(),
	);

	const handleCloseModal = () => {};

	const onStartDateChange = e => {
		setDateStart(e);
		setDateEnd(moment(e).add(1, 'hour').toDate());
	};

	const onFinishDateChange = e => {
		setDateEnd(moment(e).toDate());
	};

	return (
		<ReactModal
			className="modal"
			closeTimeoutMS={200}
			isOpen={true}
			onRequestClose={handleCloseModal}
			overlayClassName="modal-fondo"
			style={customStyles}
		>
			<h1> Nuevo evento </h1>
			<hr />
			<form className="container">
				<div className="form-group">
					<label>Fecha y hora inicio</label>
					<DateTimePicker
						onChange={onStartDateChange}
						value={dateStart}
						className="form-control"
						minDate={startDate}
					/>
				</div>

				<div className="form-group">
					<label>Fecha y hora fin</label>
					<DateTimePicker
						onChange={onFinishDateChange}
						value={dateEnd}
						className="form-control"
						minDate={dateStart}
					/>
				</div>

				<hr />
				<div className="form-group">
					<label>Titulo y notas</label>
					<input
						type="text"
						className="form-control"
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group">
					<textarea
						type="text"
						className="form-control"
						placeholder="Notas"
						rows="5"
						name="notes"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Información adicional
					</small>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block">
					<i className="far fa-save" />
					<span> Guardar</span>
				</button>
			</form>
		</ReactModal>
	);
};

export default CalendarModal;
