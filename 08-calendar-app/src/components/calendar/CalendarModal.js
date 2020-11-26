import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import composer from './composer';

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

const CalendarModal = ({
	modalOpen,
	closeModalAction,
	eventAddNewAction,
	activeEvent,
	cleanActiveEvent,
	saveActiveEvent,
}) => {
	const { t } = useTranslation();

	const startDate = moment().minutes(0).seconds(0).add(1, 'hours').toDate();

	const endDate = moment(startDate).add(1, 'hour').toDate();

	const [ dateStart, setDateStart ] = useState(startDate);

	const [ dateEnd, setDateEnd ] = useState(endDate);

	let initialFormValues = {
		title: '',
		notes: '',
		start: dateStart,
		end: dateEnd,
	};

	const [ formValues, setFormValues ] = useState(initialFormValues);

	const { title, notes, end, start } = formValues;

	useEffect(
		() => {
			if (activeEvent) {
				setDateStart(activeEvent.start);
				setDateEnd(activeEvent.end);
				setFormValues(activeEvent);
			} else {
				setFormValues(initialFormValues);
			}
		},
		[ activeEvent ],
	);

	const [ titleValid, setTitleValid ] = useState();

	const handleInputChange = ({ target }) => {
		setFormValues({ ...formValues, [target.name]: target.value });
	};

	const handleCloseModal = () => {
		closeModalAction();
		setDateStart(startDate);
		setDateEnd(endDate);
		setFormValues(initialFormValues);
		cleanActiveEvent();
	};

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

	const handleModalSubmit = e => {
		e.preventDefault();
		const momentStart = moment(start);
		const momentEnd = moment(end);

		if (momentStart.isSameOrAfter(momentEnd)) {
			Swal.fire(
				'error',
				t('translation:calendar-modal.errors.minorEndDate'),
				'error',
			);
		}

		if (title.trim().length < 2) {
			setTitleValid(false);
		} else {
			setTitleValid(true);
			if (activeEvent) {
				saveActiveEvent(formValues);
			} else {
				eventAddNewAction({
					...formValues,
					id: new Date().getTime(), // Id temporal
					user: {
						_id: '123',
						name: 'Arturo',
					},
				});
			}
			handleCloseModal();
		}
	};

	const titleFeedback = () => {
		if (titleValid === false) {
			return 'is-invalid';
		} else if (title.trim().length > 2) {
			return 'is-valid';
		} else {
			return null;
		}
	};

	return (
		<ReactModal
			className="modal"
			closeTimeoutMS={200}
			isOpen={modalOpen}
			onRequestClose={handleCloseModal}
			overlayClassName="modal-fondo"
			style={customStyles}
		>
			<h1>
				{t(
					`translation:calendar-modal.${!activeEvent
						? 'titleNewEvent'
						: 'titleEditEvent'}`,
				)}
			</h1>
			<hr />
			<form className="container" onSubmit={handleModalSubmit}>
				<div className="form-group">
					<label> {t('translation:calendar-modal.startDateTitle')} </label>
					<DateTimePicker
						onChange={onStartDateChange}
						value={dateStart}
						className="form-control"
						minDate={startDate}
					/>
				</div>

				<div className="form-group">
					<label> {t('translation:calendar-modal.endDateTitle')} </label>
					<DateTimePicker
						onChange={onFinishDateChange}
						value={dateEnd}
						className="form-control"
						minDate={dateStart}
					/>
				</div>

				<hr />

				<div className="form-group">
					<label> {t('translation:calendar-modal.titleNote')} </label>
					<input
						type="text"
						className={`form-control ${titleFeedback()}`}
						placeholder={t('translation:calendar-modal.eventTitle')}
						name="title"
						autoComplete="off"
						onChange={handleInputChange}
						value={title}
					/>
					<small id="emailHelp" className="form-text text-muted">
						{t('translation:calendar-modal.shortDescription')}
					</small>
				</div>

				<div className="form-group">
					<textarea
						type="text"
						className="form-control"
						placeholder={t('translation:calendar-modal.notes')}
						rows="5"
						name="notes"
						onChange={handleInputChange}
						value={notes}
					/>
					<small id="emailHelp" className="form-text text-muted">
						{t('translation:calendar-modal.additional')}
					</small>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block">
					<i className="far fa-save" />
					<span> {t('translation:calendar-modal.save')} </span>
				</button>
			</form>
		</ReactModal>
	);
};

export default composer(CalendarModal);
