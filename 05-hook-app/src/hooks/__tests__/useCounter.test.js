import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from 'hooks/useCounter';

describe('useCounter Tests', () => {
	it('should return default values', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, increment, decrement, reset } = result.current;

		expect(counter).toBe(13);

		expect(typeof increment).toBe('function');
		expect(typeof decrement).toBe('function');
		expect(typeof reset).toBe('function');
	});

	it('should increment by 2', () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment } = result.current;

		const incrementMock = jest.fn(increment);
		act(() => {
			incrementMock(2);
		});

		const { counter } = result.current;

		expect(incrementMock).toHaveBeenCalled();
		expect(counter).toBe(102);
  });

  it('should decrement by 3', () => {
		const { result } = renderHook(() => useCounter(99));
		const { decrement } = result.current;

		const decrementMock = jest.fn(decrement);
		act(() => {
			decrementMock(3);
		});

		const { counter } = result.current;

		expect(decrementMock).toHaveBeenCalled();
		expect(counter).toBe(96);
  });

  it('should reset value', () => {
		const { result } = renderHook(() => useCounter(50));
		const { reset, increment } = result.current;

		const incrementMock = jest.fn(increment);
		const resetMock = jest.fn(reset);
		act(() => {
      incrementMock(13);
      resetMock();
		});

		const { counter } = result.current;

		expect(incrementMock).toHaveBeenCalled();
		expect(counter).toBe(50);
  });


});
