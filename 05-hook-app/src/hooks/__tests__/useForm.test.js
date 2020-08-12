import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from 'hooks/useForm';

describe('useForm tests', () => {
	const initialForm = {
		name: 'Cuauhtlahuac',
		email: 'cuitlagua@gmail.com',
	};

	it('should return default values', () => {
		const { result } = renderHook(() => useForm(initialForm));

		const [ values, handleInputChange, reset ] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
	});

	it('should change formulary name value', () => {
		const { result } = renderHook(() => useForm(initialForm));

		const [ , handleInputChange ] = result.current;

		const handleInputChangeMock = jest.fn(handleInputChange);

		act(() => {
			handleInputChangeMock({ target: { name: 'name', value: 'Gabriel' } });
		});

    expect(handleInputChangeMock).toBeCalled();

    const [{name, email}] = result.current;
    
    expect(name).toBe('Gabriel')
	});

	it('should reset values with RESET function', () => {
    const { result } = renderHook(() => useForm(initialForm));

		const [ , , reset ] = result.current;

		const resetMock = jest.fn(reset);

		act(() => {
			resetMock();
    });
    
    expect(resetMock).toBeCalled();

    const [ values ] = result.current;
    
    expect(values).toEqual(initialForm);

  });
});
