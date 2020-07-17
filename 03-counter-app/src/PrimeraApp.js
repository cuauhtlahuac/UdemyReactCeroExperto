import React from 'react';

export default function PrimeraApp({ saludo }) {
    if (!saludo) {
        throw new Error("Que te pasa, envía el saludo man!")
    }
    
	return (
		<React.Fragment>
			<h1>{saludo}</h1>
		</React.Fragment>
	);
}
