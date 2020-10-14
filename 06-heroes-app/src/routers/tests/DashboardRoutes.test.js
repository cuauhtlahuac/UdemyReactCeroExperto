import React from 'react';
import { mount, shallow } from 'enzyme';
import DashboardRoutes from 'routers/DashboardRoutes';
import { AuthContext } from 'contexts/authContext';
import { MemoryRouter } from 'react-router-dom';

describe('<DashboardRoutes /> tests', () => {
	let component;
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: true, name: 'Chico Che' },
	};

	beforeEach(() => {
		component = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>,
		);
	});

	afterEach(() => {
		component.unmount;
	});

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
  });
  
  test('should have the user name', () => {
    expect(component.find('span').text()).toBe(contextValue.user.name)
  })
});
