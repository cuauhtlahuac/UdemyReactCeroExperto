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

	const [ formValues, setFormValues ] = useState({
		title: '',
		notes: '',
		start: dateStart,
		end: dateEnd,
	});

	const { title, notes, start, end } = formValues;

	const handleInputChange = ({ target }) => {
		setFormValues({ ...formValues, [target.name]: target.value });
	};

	const handleCloseModal = () => {};

	const onStartDateChange = e => {
		const end = moment(e).add(1, 'hour').toDate();

		setDateStart(e);
		setDateEnd(end);
		setFormValues({ ...formValues, start: e, end });
	};

	const onFinishDateChange = e => {
		setDateEnd(moment(e).toDate());
		setFormValues({ ...formValues, end: e });
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
						onChange={handleInputChange}
						value={title}
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
						onChange={handleInputChange}
						value={notes}
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
