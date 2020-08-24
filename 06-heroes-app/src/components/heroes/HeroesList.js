import React from 'react';

import { getHeroesByPublisher } from 'selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {
	return (
		<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
			{getHeroesByPublisher(publisher).map(hero => (
				<HeroCard
					key={hero.id}
					{...hero}
				/>
			))}
		</div>
	);
};

export default HeroesList;
