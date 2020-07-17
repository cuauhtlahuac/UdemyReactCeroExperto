import React from 'react';

export default function PrimeraApp() {
	const saludo = 'Hola Mundo';

	const obj = { [Symbol('Age')]: '37', name: 'Cuauh', Apellido: 'Aristeo' };

	const arr = [
		null, // No se renderiza
		undefined, // No se renderiza
		false, // No se renderiza
		0,
		'str',
		2665.465,
		(() => {
			const newArr = [];
			for (const val in obj) {
				newArr.push(JSON.stringify(val));
			}
			return newArr;
		})()
	];

	return (
		<React.Fragment>
			<h1>{saludo}</h1>
			<pre>{JSON.stringify(obj, null, 3)}</pre>
			{arr.map((value, i) => <pre key={'value' + value + ' ' + i}>{value}</pre>)}
			<p>con React Fragment</p>
		</React.Fragment>
	);
}
