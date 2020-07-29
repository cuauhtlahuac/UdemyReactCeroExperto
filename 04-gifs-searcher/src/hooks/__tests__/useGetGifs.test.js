import '@testing-library/jest-dom'
import { useGetGifs } from 'hooks/useGetGifs';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useGetGifs Hook test', () => {
	it('should return the initial state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useGetGifs());
        
        const { data, loading } = result.current;
        await waitForNextUpdate(); // EVITA EL ERROR POR EL UNMOUNT DEL COMPONENTE
        
        expect( data.length ).toBe( 0 );
        expect( loading ).toBeTruthy();
        
    });
    
    it('should return an array of images, and loading false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useGetGifs('Dragon Ball'));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 20 );
        expect( loading ).toBeFalsy();
    })
    
});
