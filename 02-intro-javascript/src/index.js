import { getHeroById } from "js-bases/ModuleExport";

const promesa = new Promise((res, rej) => {
    console.log('La promesa inicia');
    rej("Hubo un pedo"); // intencionalmente puse el reject antes para lanzar el waning
    // así la promesa nunca se resuelve
	setTimeout(() => {
        const heroe = getHeroById(2);
		res(heroe);
	}, 2000);
});

promesa.then((response) => {
	console.log(`Obtenemos un heroe que es: ${response.name}`);
})
.catch(error => console.warn(error));
