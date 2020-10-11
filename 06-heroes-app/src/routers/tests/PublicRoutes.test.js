import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import PublicRoutes from 'routers/PublicRoutes';

describe('Pruebas de <PrivateRoute />', () => {
	let component;

	const props = {
		isAuthenticated: false,
        component: () => <span>dokdokd</span>,
    	};

	beforeEach(() => {
		component = mount(
			<MemoryRouter>
				<PublicRoutes {...props} />
			</MemoryRouter>,
		);
	});

	test('should show component if is not Authenticated and save in localStorage', () => {

		expect(component.find(props.component).exists()).toBe(true);
	});
});
