import { getHeroById } from "js-bases/ModuleExport";

const promesa = new Promise((res, rej) => {
    console.log('La promesa inicia');
    
	setTimeout(() => {
        // Tarea
        // importar archivo heroes
        const heroe = getHeroById(2);
        console.log(heroe);
		res('2'); // aquí le pasamos el argumento
	}, 2000);
});

promesa.then((response) => {
	console.log(`Then la promesa ${response} segundos después`);
});
