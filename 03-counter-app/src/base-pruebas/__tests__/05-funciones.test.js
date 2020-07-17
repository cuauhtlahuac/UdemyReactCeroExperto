import { getUser, getUsuarioActivo } from 'base-pruebas/05-funciones';

describe('05-funciones tests', () => {
    
	test('getUser should return an object', () => {
		const obj = {
			uid: 'ABC123',
			username: 'El_Papi1502'
		};

        const user = getUser();
        expect(user).toEqual(obj) // para evaluar objeto y evitar los punteros
	});

	test('getUser should be return an object using one parameter', () => {
		const username = "Yoronier"

		const obj = {
			uid: 'ABC567',
			username
		};

        const user = getUsuarioActivo(username);
        expect(user).toEqual(obj) // toEqual para evaluar objeto y evitar los punteros
	});
});
