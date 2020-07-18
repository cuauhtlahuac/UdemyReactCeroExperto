import { getHeroeByIdAsync } from 'base-pruebas/09-promesas';
import heroes from 'data/heroes';
import { getHeroeById } from 'base-pruebas/08-imp-exp';

describe('09-promesas tests', () => {

	test('should return an async heroe', ( done ) => {
        // Le pasamos ¡done! para que se ejecute la asincronia
        
		const id = 1;
		const [ dataHeroe ] = heroes;

		getHeroeByIdAsync(id).then( heroe  => {

			expect(heroe).toBe(dataHeroe);
            
            done();
			// Ejecutamos ¡done! este avisa que terminó y evita un Timeout
		});
	});

	test("should get error if heroe doesn't exist", ( done ) => {
        const id = 10;
        
		getHeroeByIdAsync().catch( error => {
            
            expect(error).toBe('No se pudo encontrar el héroe');
            
            done();
		});
    });
    
});
