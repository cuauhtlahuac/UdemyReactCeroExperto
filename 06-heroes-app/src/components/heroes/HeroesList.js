import React from 'react';

import { getHeroesByPublisher } from 'selectors/getHeroesByPublisher';

const HeroesList = ({ publisher }) => {
	return (
		<ul>
			{getHeroesByPublisher(publisher).map(hero => (
				<li key={hero.id}>{hero.superhero}</li>
			))}
		</ul>
	);
};

export default HeroesList;
