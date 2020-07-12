import heroes, { owners } from 'data/heroes';

const getHeroById = (id) => heroes.find((heroe) => heroe['id'] === id);

function filterByCompany(heroe) {
	return heroe.owner === this.owner;
}

const getHeroByOwner = (owner) => heroes.filter(filterByCompany, { owner });

function getNameAndOwner(acc, current) {
	return [ ...acc, { [current.name]: current.owner } ];
}

const newHero = {
	Cauhaman: owners[2]
};

const getHeroAndOwner = (hero) => heroes.reduce(getNameAndOwner, [ hero ]);
getHeroAndOwner(newHero);

export { getHeroById, getHeroByOwner, getHeroAndOwner };
