import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const [ images, setImages ] = useState([]);

	const url = `https://api.giphy.com/v1/gifs/search?q=${category ||
		'burgers'}&limit=20&api_key=${process.env.REACT_APP_GHIPY_KEY}`;

	const getGifs = async url => {
		const resp = await fetch(url);
		const { data } = await resp.json();

		const imgs = data.reduce(
			(acc, { id, images: { downsized_medium } = {}, title, url }) => {
				return [
					...acc,
					{ id, gif: downsized_medium.url, title, link: url },
				];
			},
			[],
		);
		console.log({ imgs });
		return setImages(imgs);
	};

	useEffect(
		() => {
			getGifs(url);
		},
		[ url ],
	);

	return (
		<div>
			<h3>{category}</h3>
			<ul>
				{images.map(image => {
					return <GifGridItem key={image.id} {...image} />;
				})}
			</ul>
		</div>
	);
};

export default GifGrid;

GifGrid.propTypes = {
	category: PropTypes.string,
};
