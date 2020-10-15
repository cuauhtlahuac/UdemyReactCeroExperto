import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from 'contexts/authContext';

import NavBar from '../NavBar';

describe('<NavBar />', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: false },
	};

	const component = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter>
				<NavBar />
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
});
