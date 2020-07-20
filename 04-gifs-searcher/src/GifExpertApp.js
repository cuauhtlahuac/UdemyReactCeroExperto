import React, { useState } from 'react';

import AddCategory from 'components/AddCategory';

const GifExpertApp = () => {
	const initialState = [ 'One Punch', 'Samurai-x', 'Dragon ball' ];
	const [ categories, setCategories ] = useState(initialState);

	return (
		<div>
			<h2>Gif Expert App</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>{categories.map((category) => <li key={category}>{category}</li>)}</ol>
		</div>
	);
};

export default GifExpertApp;
