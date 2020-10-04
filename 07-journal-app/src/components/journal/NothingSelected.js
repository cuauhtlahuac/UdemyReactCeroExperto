import React from 'react';

const NothingSelected = () => {
	return (
		<div className="nothing__main-content">
			<p>
				Select something
				<br />
				or
				<br />
				create an entry
			</p>

			<i className="far fa-star fa-4x mt-5 animate__animated animate__backInUp" />
		</div>
	);
};

export default NothingSelected;
