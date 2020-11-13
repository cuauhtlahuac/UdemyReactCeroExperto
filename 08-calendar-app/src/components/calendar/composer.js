import { connect } from 'react-redux';

import moment from 'moment';

import { closeModalAction, openModalAction } from 'actions/uiActions';
import { compose } from 'redux';

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
	return {
		test: state.test,
		modalOpen: state.ui.modalOpen,
	};
};

const mapDispatchToProps = {
	closeModalAction,
	openModalAction,
};

const mapPropsToProps = () => ({
	startDate: moment().minutes(0).seconds(0).add(1, 'hours').toDate(),
	dispatchers: mapDispatchToProps,
});

export default connect(mapStateToProps, mapPropsToProps);
