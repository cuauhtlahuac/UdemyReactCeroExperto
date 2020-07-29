import '@testing-library/jest-dom'
import { useGetGifs } from 'hooks/useGetGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useGetGifs Hook test', () => {
	test('should return the initial state', () => {
        const { result } = renderHook(() => useGetGifs('Muppets'));

        const { data, loading } = result.current;

        expect( data.length ).toBe( 0 );
        expect( loading ).toBeTruthy();

	});
});
