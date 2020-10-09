import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import PrivateRoute from 'routers/PrivateRoute';

describe('Pruebas de <PrivateRoute />', () => {
	const props = {
    isAuthenticated: false,
    component: () => <span>dokdokd</span>,
    location: { pathname: '/', key: 'koskoks' },
	};
	
	Storage.prototype.setItem = jest.fn(); // Web Storage Api

	test('should show component if isAuthenticated and save in localStorage', () => {
		const component = mount(
			<MemoryRouter>
				<PrivateRoute {...props} isAuthenticated={true} />
			</MemoryRouter>,
		);

		expect(component.find('span').exists()).toBe(true);
	});

	test('should call local storage setItem method', () => {
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
	})
});
