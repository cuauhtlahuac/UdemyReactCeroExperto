import { heroes } from "data/heroes";

export const getHeroesById = ( id ) => {

  return heroes.filter( hero => hero.id === id );
};
