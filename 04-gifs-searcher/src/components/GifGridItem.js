import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import 'styles/components/GifGridItem.scss'

export const GifGridItem = ({ gif, title }) => {
	const [ imageLoaded, setImageLoaded ] = useState(false);
	const [ clicked, setClicked ] = useState(false);

	useEffect(() => {}, [ gif, imageLoaded ]);
	return (
		<article 
			className={`card animate__animated 
			animate__flipInX
			${clicked && 'one-space'}`}
			onClick={()=> setClicked(!clicked)}
		>
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

GifGridItem.propTypes = {
	gif: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default React.memo(GifGridItem);
