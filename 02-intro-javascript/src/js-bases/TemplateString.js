// Template String

const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = `${ nombre } ${ apellido }`;

function sendSaludo(name){
    return `Hola ${name}`;
}

console.log(`El sistema dice: ${sendSaludo(nombreCompleto)}`);