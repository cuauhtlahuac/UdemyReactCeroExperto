import React, { useState } from 'react';

import GifGrid from 'components/GifGrid';
import AddCategory from 'components/AddCategory';

const GifExpertApp = () => {
	const initialState = [ 'Dragon ball' ];
	const [ categories, setCategories ] = useState(initialState);

	return (
		<div>
			<h2>Gif Expert App</h2>

			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map(category => (
					<GifGrid
                     category={category}
                     key={category} 
                     />
				))}
			</ol>
		</div>
	);
};

export default GifExpertApp;
