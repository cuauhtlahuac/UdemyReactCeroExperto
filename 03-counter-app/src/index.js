import React from 'react';
import ReactDOM from 'react-dom';

const saludo = (
	<div>
		<h1>Hola 🌎</h1>
		<p>Todo 🆗</p>
	</div>
);

const divRoot = document.querySelector('#root');
console.log(saludo);

ReactDOM.render(saludo, divRoot);
