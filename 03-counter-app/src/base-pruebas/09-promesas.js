import { getHeroeById } from "base-pruebas/08-imp-exp";

export const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            
			if (p1) {
				resolve(p1);
			} else {
				reject('No se pudo encontrar el héroe');
			}
		}, 1500);
	});
};
