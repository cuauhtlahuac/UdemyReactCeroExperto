import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json'; // Para renderizar el componente en snapshots

import PrimeraApp from 'PrimeraApp';

describe('<PrimeraApp />', () => {
	test('should render <PrimeraApp /> correctly', () => {
		
		const saludo = 'Hola, Soy Goku!';

		const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

		expect( toJson( wrapper )).toMatchSnapshot();
	});
});
