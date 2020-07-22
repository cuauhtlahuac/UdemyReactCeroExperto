import React, { useState } from 'react';

const GifGridItem = ({ gif, title }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<article
		className=
		"card animate__animated 
		animate__flipInX 
		animate__delay-1s"
		>

			<img
			 src={gif}
			 alt={title}
			 onLoad={()=> setImageLoaded(true)}
			 className={`smooth-image image-${
            imageLoaded ? 'visible' :  'hidden'
          	}`}
			/>
			 
			<p>{title}</p>
		</article>
	);
};

export default GifGridItem;
