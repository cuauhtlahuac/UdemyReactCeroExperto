import { retornaArreglo } from 'base-pruebas/07-deses-arr';

describe('07-deses-arr tests', () => {
	test('should return an array', () => {
		const arr = retornaArreglo();

		const [ letras, numeros ] = arr;

		expect(arr).toStrictEqual([ 'ABC', 123 ]);

		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');

		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');
	});
});
