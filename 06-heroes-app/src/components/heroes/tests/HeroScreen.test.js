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

	afterAll(() => {
		component.unmount();
	});

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
		length: 1,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	beforeEach(() => {
		component = mount(
			<MemoryRouter initialEntries={[ '/hero/marvel-spider' ]}>
				<Route
					path="/hero/:heroId"
					component={props => <HeroesScreen history={historyMock} />}
				/>
			</MemoryRouter>,
		);
	});

	afterEach(() => {
		component.unmount();
		jest.clearAllMocks();
	});

	test('should show a hero if a param exists and is been found', () => {
		expect(component.find('.col-6 h3').exists()).toBe(true);
	});

	test('should call push', () => {
		component.find('button.btn-outline-info').prop('onClick')();

		expect(historyMock.push).toHaveBeenCalled();
		expect(historyMock.goBack).not.toHaveBeenCalled();
	});
	
	test('should call goBack', () => {
		const newHistoryMock = { ...historyMock, length: 10 };
		
		const component = mount(
			<MemoryRouter initialEntries={[ '/hero/marvel-spider' ]}>
				<Route
					path="/hero/:heroId"
					component={props => <HeroesScreen history={newHistoryMock} />}
				/>
			</MemoryRouter>,
		);
		
		component.find('button.btn-outline-info').prop('onClick')();
		
		expect(newHistoryMock.push).not.toHaveBeenCalled();
		expect(newHistoryMock.goBack).toHaveBeenCalledTimes(1);
	});

	test("should call Redirect if the hero don't exists", () => {
	
		const component = mount(
			<MemoryRouter initialEntries={[ '/hero/marvel-spiderMaijsyeg' ]}>
				<Route
					path="/hero/:heroId"
					component={props => <HeroesScreen history={historyMock} />}
				/>
			</MemoryRouter>,
		);

		expect(component).toEqual({});
	});
});
