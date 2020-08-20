import React from 'react';
import { mount } from 'enzyme';

import { UserContext } from '../UserContext';
import LoginScreen from '../LoginScreen';

describe('HomeScreen Tests', () => {
	const user = { id: 132, name: 'Petronila' };

	const setUser = jest.fn();

	const component = mount(
		<UserContext.Provider value={{setUser}}>
			<LoginScreen />
		</UserContext.Provider>,
	);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should execute setUser with expected argument', () => {
		
		component.find('button').prop('onClick')();
		
		expect(setUser).toHaveBeenCalled();
		expect(setUser).toHaveBeenCalledWith(user);
	})
	
});
