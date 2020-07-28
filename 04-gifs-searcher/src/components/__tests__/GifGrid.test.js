import React from 'react'
import { shallow } from "enzyme"

import GifGrid from 'components/GifGrid'
import { useGetGifs } from 'hooks/useGetGifs'

jest.mock('hooks/useGetGifs'); // con esto se finge cualquier llamada a la funcion interna

describe('GifGrid tests', () => {

    test('should render correctly', () => {

        useGetGifs.mockReturnValue({
            data:[],
            load: true,
        }); // simula el return de la funcion

        const component = shallow( <GifGrid category="sol"/> );
        expect( component ).toMatchSnapshot();
    });

    test('should render with mock change', () => {


        const component = shallow( <GifGrid category="luna"/> );
        expect( component ).toMatchSnapshot();

    })
    
    
    
})
