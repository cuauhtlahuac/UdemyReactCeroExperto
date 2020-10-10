import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import PrivateRoute from 'routers/PrivateRoute';

describe('Pruebas de <PrivateRoute />', () => {
	let component;

	const props = {
		isAuthenticated: false,
		component: () => <span>dokdokd</span>,
		location: { pathname: '/', key: 'koskoks' },
	};

	beforeEach(() => {
		component = mount(
			<MemoryRouter>
				<PrivateRoute {...props} />
			</MemoryRouter>,
		);
	});

	Storage.prototype.setItem = jest.fn(); // Web Storage Api

	test('should show component if isAuthenticated and save in localStorage', () => {
		const component = mount(
			<MemoryRouter>
				<PrivateRoute {...props} isAuthenticated={true} />
			</MemoryRouter>,
		);

		expect(component.find(props.component).exists()).toBe(true);
	});

	test('should call local storage setItem method', () => {
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
	});

	test('should block component if is not authenticated', () => {
		expect(component.find(props.component).exists()).toBe(false);
	});
});
