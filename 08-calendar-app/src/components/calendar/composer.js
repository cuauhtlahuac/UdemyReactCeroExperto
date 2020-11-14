import { connect } from 'react-redux';
import { compose } from 'redux';

import moment from 'moment';

import { closeModalAction, openModalAction } from 'actions/uiActions';
import { memo } from 'react';

const startDate = moment().minutes(0).seconds(0).add(1, 'hours').toDate();

const mapStateToProps = (state, props) => {
	return {
		test: state.test,
    modalOpen: state.ui.modalOpen,
    startDate,
	};
};

const mapDispatchToProps = {
	closeModalAction,
	openModalAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo);
