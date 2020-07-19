import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from 'PrimeraApp';

describe('<PrimeraApp />', () => {
	test('should render Hola soy Goku!', () => {
		const saludo = 'Hola soy Goku!';

		const wrapper = render(<PrimeraApp saludo={saludo} />);

		expect(wrapper.getByText( saludo )).toBeInTheDocument();
	});
});
