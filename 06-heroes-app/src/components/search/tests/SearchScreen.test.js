import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import SearchScreen from '../SearchScreen';

const { mount } = require('enzyme');

describe('<SearchScreen /> Basic Tests', () => {
	const component = mount(
		<MemoryRouter initialEntries={[ '/search' ]}>
			<Route path="/" component={SearchScreen} />
		</MemoryRouter>,
	);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should show alert div', () => {
		expect(component.find('div.alert-info').text()).toBe(
			"You don't searching for heroes yet",
		);
	});

	describe('<SearchScreen /> Complex Tests', () => {
		const history = {
			push: jest.fn(),
		};

		const component = mount(
			<MemoryRouter initialEntries={[ '/search?q=batman' ]}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>,
		);

		test('should update data when url change', () => {
			expect(component.find('div.alert-info').exists()).not.toBe(true);

			expect(component.find('h5.card-title').text()).toBe('Batman');
		});

		test('should clear the text input', () => {
			expect(component.find('input[name="searchText"]').prop('value')).toBe('');
		});

		test('should show error if a hero is not found', () => {
			const villain = 'Octopus';

			const component = mount(
				<MemoryRouter initialEntries={[ `/search?q=${villain}` ]}>
					<Route path="/search" component={SearchScreen} />
				</MemoryRouter>,
			);

			expect(component.find('div.alert-danger').text()).toBe(
				`Hero "${villain}" don't found`,
			);
		});

		test('should call history push', () => {
			const hero = 'Spider';

			const component = mount(
				<MemoryRouter initialEntries={[ `/search?q=${hero}` ]}>
					<Route
						path="/search"
						component={props => <SearchScreen history={history} />}
					/>
				</MemoryRouter>,
			);

			const input = component.find('input');
			input.simulate('change', {
				target: {
					name: 'searchText',
					value: hero,
				},
			});

			component.find('form').simulate('submit');

			expect(history.push).toHaveBeenCalledWith(`?q=${hero}`);
		});
	});
});
