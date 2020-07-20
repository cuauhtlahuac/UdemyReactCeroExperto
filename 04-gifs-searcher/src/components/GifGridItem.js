import React from 'react';

const GifGridItem = ({ id, gif, title }) => {
	return (
		<div
			onClick={() => console.log('click:' + title)}
			className="card"
		>
			<img src={gif} />
			<p>{title}</p>
		</div>
	);
};

export default GifGridItem;
