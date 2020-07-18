import { getHeroeById, getHeroesByOwner } from 'base-pruebas/08-imp-exp';
import heroes from 'data/heroes';

describe('08-imp-exp tests', () => {
	const Marvel = 'Marvel';
	const DC = 'DC';

	test('getHeroeById should find a heroe with id', () => {
		const id = 1;

		const heroe = getHeroeById(id);

		const foundHeroe = heroes.find((h) => h.id === id);

		expect(heroe).toStrictEqual(foundHeroe);
	});

	test('getHeroeById should find a undifined without valid id', () => {
		const id = 10;

		const heroe = getHeroeById(id);
        
		expect(heroe).toBe(undefined);
	});
    
	test("getHeroeById should return undefined without param", () => {
        const heroe = getHeroeById();
		expect(heroe).toStrictEqual(undefined);
	});

	test('getHeroesByOwner should find a list of Marvel heroes', () => {
		const heroes = getHeroesByOwner(Marvel);

		const filteredHeroes = heroes.filter((h) => h.owner === Marvel);

		expect(heroes).toStrictEqual(filteredHeroes);
		expect(heroes.length).toBe(2);
	});

	test('getHeroesByOwner should find a list of DC heroes', () => {
		const heroes = getHeroesByOwner(DC);

		const filteredHeroes = heroes.filter((h) => h.owner === DC);

		expect(heroes).toStrictEqual(filteredHeroes);
		expect(heroes.length).toBe(3);
	});

	test("getHeroesByOwner should return empty array without owner param", () => {
		const heroes = getHeroesByOwner();
		expect(heroes).toStrictEqual(new Array());
    });
    
	test("getHeroesByOwner should return empty array if owner don't exist", () => {
		const heroes = getHeroesByOwner("Panini");
		expect(heroes).toStrictEqual(new Array());
	});
});
