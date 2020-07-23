import React, { useState, useEffect } from 'react';

const GifGridItem = ({ gif, title }) => {
	const [ imageLoaded, setImageLoaded ] = useState(false);

	useEffect(() => {}, [ gif, imageLoaded ]);
	return (
		<article className="card animate__animated 
		animate__flipInX 
		animate__delay-1s
		
		">
			<img
				src={gif}
				alt={title}
				onLoad={() => setImageLoaded(true)}
				className={`smooth-image image-${imageLoaded
					? 'visible'
					: 'hidden'} ${(!title || title === ' ') && 'border-radius-bottom'}`}
			/>

			{(title && title !== ' ') && <p>{title}</p>}
		</article>
	);
};

export default GifGridItem;
