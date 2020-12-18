const moment = require('moment');

const isDate = date => {
	if (!date) {
		return false;
	}

	if (!moment(date).isValid()) {
		throw new Error('Bad Date Format');
		return false;
	}

	return true;
};

module.exports = isDate;
