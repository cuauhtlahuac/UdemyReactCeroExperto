import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from 'selectors/getHeroeById';

const HeroesScreen = () => {
	const { heroId } = useParams(); // toma la información del parámetro enviado

  const [ hero ] = getHeroesById(heroId);
  
  if(!hero) return <Redirect to="/" />

  const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
  } = hero;

	return (
		<div>
			<h1>{superhero}</h1>
		</div>
	);
};

export default HeroesScreen;
