import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const DeleteEventFab = ({ onDelete }) => {
	const { t } = useTranslation();
	return (
		<button
      className="btn btn-danger fab-danger"
      onClick={onDelete}
      >
			<i className="fas fa-trash" />
			<span> {t('translation:calendar-screen.buttons.delete-event')} </span>
		</button>
	);
};

DeleteEventFab.propTypes = {
	onDelete: PropTypes.func,
};

export default DeleteEventFab;
