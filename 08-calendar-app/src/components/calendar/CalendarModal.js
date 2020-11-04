import { useState } from 'react';
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
	const [ isOpen, setIsOpen ] = useState(true);

	const handleCloseModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<ReactModal
			className="modal"
			closeTimeoutMS={200}
			isOpen={isOpen}
			onRequestClose={handleCloseModal}
			overlayClassName="modal-fondo"
			style={customStyles}
		>
			<h1>Hola Mundo</h1>
			<button onClick={handleCloseModal}>Close Modal</button>
		</ReactModal>
	);
};

export default CalendarModal;
