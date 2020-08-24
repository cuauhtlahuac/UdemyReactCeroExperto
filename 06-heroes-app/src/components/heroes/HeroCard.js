import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	return (
		<div className="col">
			<div className="card mb-1" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-6">
						<img
							src={`../assets/heroes/${id}.jpg`}
							className="animate__animated animate__flipInY card-img"
							alt={superhero}
						/>
					</div>

					<div className="col-md-6">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							{alter_ego !== characters && (
								<p className="card-text font-weight-lighter">{characters}</p>
							)}
							<p className="card-title">
								<small className="text-muted">{first_appearance}</small>
							</p>
							<Link to={`./hero/${id}`}>more...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(HeroCard);
