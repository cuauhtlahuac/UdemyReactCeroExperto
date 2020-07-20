import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
	const [ images, setImages ] = useState([]);

	const url = `https://api.giphy.com/v1/gifs/search?q=${category ||
		'burgers'}&limit=20&api_key=${process.env.REACT_APP_GHIPY_KEY}`;

	const getGifs = async url => {
		const resp = await fetch(url);
		const { data } = await resp.json();

		const imgs = data.reduce(
			(acc, { id, images: { downsized_large } = {}, title, url }) => {
				return [
					...acc,
					{ key: id, gif: downsized_large.url, title, link: url },
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
			<li key={category}>
				{category}
				<ul>
					{images.map(item => {
						return <li key={item.key} onClick={()=>console.log("click:" + item.title)} className="images-titles">{item.title}</li>;
					})}
				</ul>
			</li>
		</div>
	);
};

export default GifGrid;

GifGrid.propTypes = {
	category: PropTypes.string,
};
