import React from 'react';
import { shallow } from 'enzyme';
import jest from "@testing-library/jest-dom";

import { GifGridItem } from 'components/GifGridItem';

describe('<GifGridItem />', () => {
	const gif = 'http://gif.com';
	const title = 'Title';
	const component = shallow(<GifGridItem gif={gif} title={title} />);

	test('Should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should have a paragraph with the title text', () => {
		const p = component.find('p');

		expect(p.text()).toBe(title);
	});

	test('should have an image with gir url and alt=title', () => {
        const img = component.find('img');
        
		console.log(img.html()); // Para imprimir el componente y poder ver sus propieades pero en html format
        
		console.log(img.props()); // El metodo prop imprime un objetos con los atributos de html del elemento
        const { src } = img.props();
        const { alt } = img.props();
        
		console.log(img.prop('className')); // Solo imprime una propiedad de un elemento que se le pasa en los parametros
        const className = img.prop('className');

        expect( src ).toBe( gif );
        expect( alt ).toBe( title );
        expect( className ).toBe('smooth-image image-hidden false')
    });
    
    test('should have animate__flipInX class in the card', () => {
        const className = component.prop( 'className' );

        expect( className ).toContain( 'animate__flipInX' );
        expect( className.includes( 'animate__flipInX' ) ).toBe( true ); // includes is a javascript method
    })
    
});
