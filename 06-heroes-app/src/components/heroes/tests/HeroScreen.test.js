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
		<MemoryRouter>
			<HeroesScreen history={historyMock} />
		</MemoryRouter>,
	);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
