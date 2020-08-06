import React from 'react';

const ShowIncrement = ({ increment }) => {
	console.log('me volví a generar :(');
	console.log('A pesar de que la funcion no cambia');
	console.log('pero sí cambia, porque la función es un objeto');
	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				increment();
			}}
		>
			Increment &#9650;
		</button>
	);
};

export default React.memo(ShowIncrement);
