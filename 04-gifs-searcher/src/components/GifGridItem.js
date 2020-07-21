import React from 'react';

const GifGridItem = ({ gif, title }) => {
	return (
		<div
		className=
		"card animate__animated 
		animate__flipInX 
		animate__delay-1s"
		>

			<img src={gif} alt={title} />
			<p>{title}</p>

		</div>
	);
};

export default GifGridItem;
