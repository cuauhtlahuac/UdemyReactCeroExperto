import React from 'react';
import PropTypes from 'prop-types';

import { useGetGifs } from 'hooks/useGetGifs';

import GifGridItem from './GifGridItem';



const GifGrid = ({ category }) => {

	const {data: images, loading} = useGetGifs(category);
	
	return (
		<div>
			<h3 className=
			"title animate__animated
			 animate__slideInRight"
			>
			{category}
			</h3>

			{ loading && <p className=
			"loading animate__animated
			 animate__fadeIn animate__repeat-3
			 animate__faster"
			 >
			 loading...
			 </p> }
			 
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
