import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; // Para que me aparescan la lista de opciones de jest-dom

import PrimeraApp from 'PrimeraApp';

describe('<PrimeraApp />', () => {
	test('should render <PrimeraApp /> correctly', () => {
		
		const saludo = 'Hola, Soy Goku!!';

		const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

		expect( wrapper ).toMatchSnapshot();
	});
});
