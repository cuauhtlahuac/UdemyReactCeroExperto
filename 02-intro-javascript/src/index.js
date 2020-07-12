import heroes, { owners } from 'data/heroes';

// find solo regresa un valor verdadero
const getHeroById = (id) => heroes.find((heroe) => heroe['id'] === id);

// filter es para regresar mas de un valor verdadero
// use un arrow function pero este mataba mi valor de this que se usar para pasar el argumento a la función,
// lo cambié por una función y le pude pasar el argumento!!!
function filterByCompany(heroe) {
	return heroe.owner === this.owner;
}

const getHeroByOwner = (owner) => heroes.filter(filterByCompany, { owner });

// Tomar en cuenta que el accumulator es inmutable,
// se pueden usar valor inicial pero de preferencia debe tener la estructura correcta.
function getNameAndOwner(acc, current) {
	return [ ...acc, { [current.name]: current.owner } ];
}

const newHero = {
	Cauhaman: owners[2]
};

const getHeroAndOwner = (hero) => heroes.reduce(getNameAndOwner, [ hero ]);

console.log(getHeroById(2));
console.log(getHeroByOwner(owners[1]));
console.log(getHeroAndOwner(newHero));

