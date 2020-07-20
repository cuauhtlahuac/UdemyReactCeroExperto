import React, { useState } from 'react';

import GifGrid from 'components/GifGrid';
import AddCategory from 'components/AddCategory';

const GifExpertApp = () => {
	const initialState = [ 'Dragon ball' ];
	const [ categories, setCategories ] = useState(initialState);
	const [ categoryDictionary, setCategoryDictionary ] = useState({});
	const [ sameValue, setSameValue ] = useState(false);

	if (sameValue) {
		return (
			<div>
				<h1>same value</h1>
				<button onClick={() => setSameValue(false)}>return</button>
			</div>
		);
	}

	return (
		<div>
			<h2>Gif Expert App</h2>

			<AddCategory
				setCategories={setCategories}
				setCategoryDictionary={setCategoryDictionary}
				setSameValue={setSameValue}
				categoryDictionary={categoryDictionary}
			/>
			<hr />

			<ol>
				{categories.map(category => {
					return <GifGrid category={category} key={category} />;
				})}
			</ol>
		</div>
	);
};

export default GifExpertApp;
