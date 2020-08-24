import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { getHeroesById } from 'selectors/getHeroeById';

const HeroesScreen = ({ history }) => {
	const { heroId } = useParams(); // toma la información del parámetro enviado

	const [ hero ] = getHeroesById(heroId);

	if (!hero) return <Redirect to="/" />;

	const handleReturn = () => {
		if (history.length <= 2) {
			return history.push('/');
		}
		return history.goBack();
	};

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	return (
		<div className="row mt-5">
			<div className="col-6">
				<img
					src={`../assets/heroes/${heroId}.jpg`}
					alt={superhero}
					className="img-thumbnail"
				/>
			</div>

			<div className="col-6">
				<h3>{superhero}</h3>

				<ul className="list-group">
					<li className="list-group-item">
						<b>Alter ego: </b>
						{alter_ego}
					</li>

					<li className="list-group-item">
						<b>Publisher: </b>
						{publisher}
					</li>

					<li className="list-group-item">
						<b>First Appearance: </b>
						{first_appearance}
					</li>
				</ul>

				<h5 className="mt-3"> Characters </h5>

				<p>{characters}</p>

				<button className="btn btn-outline-info" onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};

export default HeroesScreen;
