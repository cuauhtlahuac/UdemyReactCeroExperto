import React, { useState } from 'react';

import GifGrid from 'components/GifGrid';
import AddCategory from 'components/AddCategory';

const GifExpertApp = ({ definedCategories = [] }) => {

	const [ categories, setCategories ] = useState(definedCategories);
	const [ categoryDictionary, setCategoryDictionary ] = useState({});
	const [ sameValue, setSameValue ] = useState(false);

	if (sameValue) {
		return (
			<div>
				<h1>You wrote it again, please write other category </h1>
				<button onClick={() => setSameValue(false)}>return</button>
			</div>
		);
	}

	return (
		<section>
			<h1 className="gif-title">Gif Searcher</h1>

			<AddCategory
				setCategories={setCategories}
				setCategoryDictionary={setCategoryDictionary}
				setSameValue={setSameValue}
				categoryDictionary={categoryDictionary}
			/>
			<hr />

			{categories.map(category => {
				return <GifGrid category={category} key={category} />;
			})}
		</section>
	);
};

export default GifExpertApp;
