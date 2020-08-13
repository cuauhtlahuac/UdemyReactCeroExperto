import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';

import MultipleCustomHooks from '../MultipleCustomHooks';
import useFetch from 'hooks/useFetch';
import useCounter from 'hooks/useCounter';

jest.mock('hooks/useFetch');
jest.mock('hooks/useCounter');

describe('MultipleCustomHooks Tests', () => {
  let component;

	beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 21,
      increment: jest.fn(),
    })

    useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
    });
    
		component = mount(<MultipleCustomHooks />);
	});
  
	afterEach(() => {
    component.unmount();
	});
  
	test('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
  
	test('should paint the information', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Cuauhtlahuac',
        quote: 'Hola Mundo'
      }],
			loading: false,
			error: null,
    });

    const component = mount(<MultipleCustomHooks />);
    
    const quote = component.find('p')
    const author = component.find('footer')
    const loading = component.find('span .sr-only');

    expect(loading.exists()).toBe(false);
		expect(quote.text()).toBe('Hola Mundo');
		expect(author.text()).toBe('Cuauhtlahuac');
	});
});
