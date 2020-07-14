// Desestrucuración de objetos

const persoajes = [ 'Goku', 'Vegueta', 'Trunks' ];

// Sin desestructuración
/*
const goku = persoajes[0]
const vegueta = persoajes[1]
const trunks = persoajes[2]
*/

// Quiero a Vegueta, le doy la posición correcta
const [ , vegueta ] = persoajes;

console.log(vegueta);

// Tarea
// 1.- El primer valor se llamara nombre
// 2.- se llamará setNombre

const useState = () => {
	return [
		'Goku',
		() => {
			return console.log('Hola mundo');
		}
	];
};

const [ nombre, setNombre ] = useState();

console.log(nombre);
console.log(setNombre());
