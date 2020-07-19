import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJSON from 'enzyme-to-json';

import CounterApp from 'CounterApp';

describe('<CounterApp /> tests', () => {

	let component; // Declaramos aqui para mantener el scope
    
    beforeEach(() => (component = shallow(<CounterApp />))); // Se va a ejecutar antes de cada prueba,
                                                            // para reinicializar el componente

	test('should render <CounterApp /> Correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should render 100 as value', () => {
		const value = 100;
		const component = shallow(<CounterApp value={value} />);
		const h2 = component.find('h2').text();

		expect(h2).toBe(` ${value} `);

		expect(toJSON(component)).toMatchSnapshot();
	});

	test('should add 1 with "↑1" button', () => {
		const btn1 = component.find('button').at(0); // at sirve para seleccionar la posición del elemento,
		// en este caso también se puede usar first();
		console.log(btn1.html()); // esto lo uso para solo para ver el elemento seleccionado es correcto
		btn1.simulate('click'); // recibe dos argumentos, pero usamos solo uno, que es hacer click

		const h2 = component.find('h2').text(); // Tomamos el componente updateado después de la simulación

		expect(h2).toBe(` 11 `); // esperamos que sea el valor default 10 + 1 = 11
	});

	test('should subtract 1 with "↓1" button ', () => {
		const btn2 = component.find('button').at(2);

		btn2.simulate('click');

		const h2 = component.find('h2').text();

		expect(h2).toBe(` 9 `);
	});
});
