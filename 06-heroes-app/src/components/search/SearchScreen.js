import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import HeroCard from 'components/heroes/HeroCard';
import { useForm } from 'hooks/useForm';
import { getHeroByName } from 'selectors/getHeroByName';

const SearchScreen = ({ history }) => {
	const { search } = useLocation();

	const { q: heroSearched = '' } = useMemo(() => queryString.parse(search), [
		search,
	]);

	const filteredHeroes = useMemo(() => getHeroByName(heroSearched), [
		heroSearched,
	]);

	const [ formValues, handleInputChange, reset ] = useForm({ searchText: '' });

	const { searchText } = formValues;

	const handleSearch = event => {
		event.preventDefault();
		history.push(`?q=${searchText}`);
		reset();
	};

	return (
		<div>
			<div className="row">
				<div className="col-5">
					<h3>Search</h3>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							autoComplete="off"
							name="searchText"
							type="text"
							value={searchText}
							placeholder="Find your hero"
							className="form-control"
							onChange={handleInputChange}
						/>

						<button
							type="submit"
							className="btn my-2 btn-block btn-outline-primary"
						>
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{heroSearched.length < 1 && (
						<div className="alert alert-info">
							You don't searching for heroes yet
						</div>
					)}

					{	( filteredHeroes.length < 1 &&
						heroSearched.length > 0 ) && 
						( <div className="alert alert-danger">
								Hero "{`${heroSearched}`}" don't found
							</div> )
					}

					{filteredHeroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
