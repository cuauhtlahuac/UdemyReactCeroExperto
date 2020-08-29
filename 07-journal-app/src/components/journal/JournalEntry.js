import React from 'react';

const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://i.pinimg.com/originals/75/a4/c2/75a4c2d1dc2dbce3342109e8270ff4f3.jpg)',
				}}
			/>
			<div className="journal__entry-body">
				<p className="journal__entry-title">un nuevo día</p>
				<p className="journal__entry-content">
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchang
				</p>
        <div className="journal__entry-title">

        </div>
			</div>
		</div>
	);
};

export default JournalEntry;
