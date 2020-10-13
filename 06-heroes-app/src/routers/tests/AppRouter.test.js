import { AuthContext } from 'contexts/authContext';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import AppRouter from 'routers/AppRouter';

describe('<PrivateRoute /> Tests', () => {
	let component;
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: false },
	};

	beforeEach(() => {
		component = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>,
		);
	});

	afterEach(()=>{
		component.unmount;
	})

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
