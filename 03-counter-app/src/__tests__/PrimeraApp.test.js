import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json'; // Para renderizar el componente en snapshots

import PrimeraApp from 'PrimeraApp';

describe('<PrimeraApp />', () => {
	test('should render <PrimeraApp /> correctly', () => {
		const saludo = 'Hola, Soy Goku!';

		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test('should find a subtitle prop in ', () => {
		const saludo = 'Hola, Soy Goku!';
		const subtitle = 'Hola, Soy Subtitle';

		const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitle} />);

		const parrafo = wrapper.find('p').text(); // esto es lo mismo que hacer "document.querySelector();"
		// From Enzime Docs: .find(selector) => ShallowWrapper
		// > Find every node in the render tree that matches the provided selector.

		expect(parrafo).toBe(subtitle);
	});

	test('should find one h1', () => {
		const saludo = 'Hola, Soy Goku!';
		const subtitle = 'Hola, Soy Subtitle';
		const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitle} />);

		const h1 = wrapper.find('h1');

		expect(wrapper.find('h1')).toHaveLength(1);
	});

	test('should find props texts', () => {
		const wrapper = shallow(<PrimeraApp saludo={'hfihf64684'} subtitulo={'foijoif1351'} />);

		expect(wrapper.text()).toContain('hfihf64684');
		expect(wrapper.text()).toContain('foi');
	});
});
