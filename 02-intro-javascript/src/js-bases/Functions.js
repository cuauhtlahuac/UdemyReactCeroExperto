// Funciones en JS

const saludar = function(nombre) {
	return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('亀 Goku 🥕'));
console.log(saludar2('𖢞 Vegueta 🌳'));

const getUser = () => ({
	uid: '565654',
	username: 'El_Papi13212'
});

const user = getUser(); // guardar la funcion ejecutada
// le da a la variable el valor que se retorna
console.log(user);

// Tarea
// 1.- transformar arrow function
// 2.- Tiene que retornar un objeto implicito
// 3.- Pruebas

const getUsuarioActivo = (nombre) => ({
	uid: '13216516',
	username: nombre
});

const usuarioAtivo = getUsuarioActivo(' El Peterete 🤪');
console.log(usuarioAtivo);
