import { getSaludo } from 'base-pruebas/02-template-string';

describe('02-templeate-string tests', () => {
	test('getSaludo debe retornar Hola Cuauhtlahuac!', () => {
		const name = 'Cuauhtlahuac';

		const saludo = getSaludo(name);

		expect(saludo).toBe('Hola Cuauhtlahuac!');
	});

	test('should render a default name Carlos', () => {
		const saludo = getSaludo();

		expect(saludo).toBe('Hola Carlos!');
	});
});
