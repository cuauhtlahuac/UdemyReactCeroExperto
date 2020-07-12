import React from 'react';
import ReactDOM from 'react-dom';
// const https = require('https');
const http = require('http');

// NOTA: Javascript sólo puede ejecutar una tarea a la vez!, no es multitarea.
// La Pila de ejecución se ejecuta conforme las funciones se llaman, pero puedo
// Dejar una función pediente de respuesta mientras la funcion que está pendiente regresa con la respuesta

async function getCountryName(code) {
	function getCountries() {
		return new Promise(fetchCountries);
	}
	console.log('Hola, yo me ejecuto antes del await');
	const countries = await getCountries();
	console.log({ countries });
	console.log('La espera terminó, tenemos los resultados');
}

async function main() {
	const name = await getCountryName('AF');
	return name;
}
console.log('Hola, me estoy ejecutando antes del main');
main();
console.log(
	'Me ejecuto después del main (asyncrono ), el flujo sigue,\nporque no estoy dentro del scope de una función asyncrona'
);

function TestButton() {
	return (
		<div>
			<h1>React Dom</h1>
			<button
				onClick={() => {
					document.getElementsByTagName("body")
				}}
			>Click here</button>
		</div>
	);
}

ReactDOM.render(<TestButton />, document.getElementById('root'));

function fetchCountries(resolve, reject) {
	console.log('starting fetchCountries');
	http
		.get('https://jsonmock.hackerrank.com/api/countries?page=', (res) => {
			const statusCode = res.statusCode;
			const contentType = res.headers['content-type'];

			let error;
			if (statusCode !== 200) {
				error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
			} else if (!/^application\/json/.test(contentType)) {
				error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
			}
			if (error) {
				console.log(error.message);
				// consume response data to free up memory
				res.resume();
				return reject(error);
			}

			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => (rawData += chunk));
			res.on('end', () => {
				try {
					const parsedData = JSON.parse(rawData);
					console.log(parsedData);
					return;
				} catch (e) {
					reject(e.message);
				}
			});
			setTimeout(() => {
				resolve('Todo se ejecuto bien');
				console.log('Yo si esperé al resolve porque estoy dentro del bloque');
			}, 5000);

			// El timeout debajo no está en el bloque del resolve, por lo tanto el código se ejecuta
			setTimeout(() => {
				console.log('No estoy dentro del bloque, por lo que me ejecuto sin esperar al resolve');
			}, 1000);
		})
		.on('error', (e) => {
			console.log(`Got error: ${e.message}`);
		});
}
