import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

import useFetch from 'hooks/useFetch';

describe('useFetch Tests', () => {
	test('should return initial data', () => {
		const { result } = renderHook(() =>
			useFetch('https://reqres.in/api/users?page=2'),
		);

		const { data, loading, error } = result.current;

		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});

	test('should return data, loading false and error null', async () => {
		const { result, waitForNextUpdate, unmount } = renderHook(() =>
			useFetch('https://reqres.in/api/users?page=2'),
		);

		await waitForNextUpdate();
		const { data, loading, error } = result.current;

		expect(data).not.toBe(null);
		expect(loading).toBe(false);
		expect(error).toBe(null);

		unmount(useFetch);
	});

	test('should return error', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch('https://reqres.in/apid/users?page=2'),
		);

    
    await waitForNextUpdate({timeout: 5000});
    const { data, loading, error } = result.current;
    
		expect(data).toBe(null);
		expect(loading).toBe(false);
		expect(error).not.toBe(null);

	});
});
