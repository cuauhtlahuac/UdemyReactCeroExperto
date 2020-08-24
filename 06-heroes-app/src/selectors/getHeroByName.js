import { heroes } from "data/heroes";

export const getHeroByName = (heroSearched = '') => {
  if(heroSearched.length < 1) return [];

  const heroName = heroSearched.toLowerCase();

  return heroes.filter(hero => hero.superhero.toLowerCase().includes(heroName));
};