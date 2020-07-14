import { getHeroById } from 'js-bases/08-ModuleExport';

const getHeroeByIdAsync = (id) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			const heroe = getHeroById(id);
			if (heroe) {
				res(heroe);
			} else {
				rej('El heroe no se encontró');
			}
		}, 2000);
	});
};

const myThen = heroe => console.log('Heroe: ', heroe);

getHeroeByIdAsync(3).then(myThen).catch(console.warn);
