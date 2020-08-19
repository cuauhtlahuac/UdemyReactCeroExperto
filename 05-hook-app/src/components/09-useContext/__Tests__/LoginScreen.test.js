import React from 'react';
import { mount } from 'enzyme';

import { UserContext } from '../UserContext';
import LoginScreen from '../LoginScreen';

describe('HomeScreen Tests', () => {
	const user = {
		name: 'Cuautlahuac',
		email: 'cuauh@gmail.com',
	};

	const component = mount(
		<UserContext.Provider value={user}>
			<LoginScreen />
		</UserContext.Provider>,
	);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
