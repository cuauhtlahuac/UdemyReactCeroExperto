import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useGetGifs } from 'hooks/useGetGifs';


const GifGrid = ({ category }) => {

	const {data: images, loading} = useGetGifs(category);
	
	return (
		<div>
			<h3>{category}</h3>
			{loading && <p>loading...</p>}
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
