import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';

import { AuthContext } from 'contexts/authContext';

import NavBar from '../NavBar';
import { types } from 'types/types';

describe('<NavBar />', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: false, name: 'John Titor' },
	};
  
	const historyMock = {
    push: jest.fn(),
		history: {},
		replace: jest.fn(),
    listen: jest.fn(),
    location: {},
    createHref: jest.fn(),
    pathname: '/',
	};

	const component = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<NavBar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>,
	);
  
	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should have a Link with home word', () => {
		const actual = component.find('a').first();

		expect(actual.text()).toMatch('Home');
	});

	test('should have a Link with home word', () => {
		const actual = component.find('span.nav-item');

		expect(actual.text()).toMatch(contextValue.user.name);
	});

	test('should render nothing', () => {
		component.find('button.nav-item').prop('onClick')();

		expect(component).toEqual({});
	});

	test('should call dispatch with logout action', () => {
		expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
	});

	test('should call dispatch', () => {
		expect(historyMock.replace).toHaveBeenCalledWith('/login');
	});
});
