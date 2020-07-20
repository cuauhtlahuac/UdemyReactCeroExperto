import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { getGifs } from 'utils/getGifs';

const GifGrid = ({ category }) => {
	const [ images, setImages ] = useState([]);

	useEffect(
		() => {
			getGifs(category).then(imgs => setImages(imgs));
		},
		[ category ],
	);

	return (
		<div>
			<h3>{category}</h3>
			<div className="image-grid">
				{images.map(image => {
					return <GifGridItem key={image.id} {...image} />;
				})}
			</div>
		</div>
	);
};

export default GifGrid;

GifGrid.propTypes = {
	category: PropTypes.string,
};
