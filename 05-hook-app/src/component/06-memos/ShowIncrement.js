import React from 'react';

const ShowIncrement = ({ increment }) => {
	console.log('me volví a generar :(');
	return (
		<button
			className="btn btn-primary"
			onClick={increment}
		>
			Increment &#9650;
		</button>
	);
};

export default React.memo(ShowIncrement);
