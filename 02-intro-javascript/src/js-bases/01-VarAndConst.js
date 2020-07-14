// Variables y constantes

const nombre = 'Fernando';
const apellido = "Herrera";

let valorDado = 8;
valorDado = 7;

// var No se debe usar
if(true){
    // esto es valido porque las variables tiene un scope diferente
    const nombre = "Cuauh";
    const apellido = "Aristeo"
    let valorDado = 5;
    console.log({nombre, apellido, valorDado});
}

console.log({nombre, apellido, valorDado});