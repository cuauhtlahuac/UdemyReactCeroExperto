import { AuthContext } from 'contexts/authContext';
import React, { PureComponent } from 'react';
import { types } from 'types/types';
import LoginScreen from '../LoginScreen';
const { shallow, mount } = require('enzyme');

describe('<Login Screen tests /> Tests', () => {
  const history = {
    replace: jest.fn(),
  }

	const context = {
		dispatch: jest.fn(),
	};

	const component = mount(
		<AuthContext.Provider value={context}>
			<LoginScreen history={history} />
		</AuthContext.Provider>,
	);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should render correctly', () => {
		expect(component.find('div.m-5 h1').text()).toBe('Login');
	});

	test('should call dispatch', () => {
		component.find('button').prop('onClick')();

		expect(context.dispatch).toHaveBeenCalledWith({
			type: types.login,
			payload: { name: 'Cuauhtlahuac' },
		});
	});
});
