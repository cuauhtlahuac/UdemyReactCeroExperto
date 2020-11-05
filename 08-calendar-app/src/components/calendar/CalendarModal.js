import ReactModal from 'react-modal';

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

const CalendarModal = props => {
	const handleCloseModal = () => {};

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
					<input className="form-control" placeholder="Fecha inicio" />
				</div>

				<div className="form-group">
					<label>Fecha y hora fin</label>
					<input className="form-control" placeholder="Fecha inicio" />
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
