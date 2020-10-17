import React from 'react';
import { mount } from 'enzyme';
import HeroesScreen from '../HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Tests <HeroScreen /> without hero', () => {
	const historyMock = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	const component = mount(
		<MemoryRouter initialEntries={[ '/hero' ]}>
			<HeroesScreen history={historyMock} />
		</MemoryRouter>,
	);

	test("should show the component redirect if don't have arguments", () => {
		expect(component.find('Redirect').exists()).toBe(true);
	});
});

describe('Tests <HeroScreen /> with hero', () => {
	let component;

	const historyMock = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	beforeEach(() => {
		component = mount(
			<MemoryRouter initialEntries={[ '/hero/marvel-spider' ]}>
				<Route path="/hero/:heroId" component={HeroesScreen} />
			</MemoryRouter>,
		);
	});

	test('should show a hero if a param exists and is been found', () => {
		expect(component.find('.col-6 h3').exists()).toBe(true);
	});
});
