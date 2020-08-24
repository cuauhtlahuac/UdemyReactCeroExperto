import React, { useMemo } from 'react';

import { getHeroesByPublisher } from 'selectors/getHeroesByPublisher';

import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {
	const heroes = useMemo(
		() => {
			return getHeroesByPublisher(publisher);
		},
		[ publisher ],
	);

	return (
		<div className="animate__animated
			animate__fadeIn
			row row-cols-1
			row-cols-sm-2 
			row-cols-lg-3
			row-cols-xl-4 
			g-4"
		>
			{heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
		</div>
	);
};

export default React.memo(HeroesList);
