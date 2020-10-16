import React from 'react';
import { mount } from 'enzyme';
import HeroesScreen from '../HeroScreen';
import { MemoryRouter } from 'react-router-dom';

describe('Tests <HeroScreen />', () => {
	const historyMock = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	const component = mount(
		<MemoryRouter initialEntries={['/hero']}>
			<HeroesScreen history={historyMock} />
		</MemoryRouter>,
	);

	test('should show the component redirect if don\'t have arguments', () => {
		expect(component.find('Redirect').exists()).toBe(true);
	});
});
