import React, { useMemo } from 'react';
import queryString from 'query-string';

import HeroCard from 'components/heroes/HeroCard';
import { heroes } from 'data/heroes';
import { useForm } from 'hooks/useForm';
import { useLocation } from 'react-router-dom';

const SearchScreen = ({ history }) => {
	const { search } = useLocation();

	const { q: heroSearched = '' } = useMemo(() => queryString.parse(search), [
		search,
	]);

	const filteredHeroes = heroes.filter(hero => hero.superhero === heroSearched);

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
							className="btn m-1 btn-block btn-outline-primary"
						>
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{filteredHeroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
