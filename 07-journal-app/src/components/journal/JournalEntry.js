import React from 'react';

const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://i.pinimg.com/originals/75/a4/c2/75a4c2d1dc2dbce3342109e8270ff4f3.jpg)',
				}}
			/>
			<div className="journal__entry-body">
      <section className="journal__entry-section">

				<p className="journal__entry-title">un nuevo día</p>
				<p className="journal__entry-content">
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of  printer took a gall
				</p>
      </section>
				<div className="journal__entry-date-box">
					<span>Monday</span>
					<h4>28</h4>
				</div>
			</div>
		</div>
	);
};

export default JournalEntry;
