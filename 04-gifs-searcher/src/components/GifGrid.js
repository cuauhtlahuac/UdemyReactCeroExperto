import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import { useGetGifs } from 'hooks/useGetGifs';

const GifGridItem = lazy(() => import('./GifGridItem'));

const Loader = () => <div className="loading">Loading...</div>;

const GifGrid = ({ category }) => {
	const { data: images, loading } = useGetGifs(category);

	return (
		<section>
			<h3 className=
			"title animate__animated
			 animate__slideInRight"
			 >
				{category}
			</h3>

			{loading && (
				<p className=
				"loading animate__animated
				animate__fadeIn animate__repeat-3
				animate__faster"
				>
					loading...
				</p>
			)}

			<section className="image-grid">
				{images.map(image => (
					<Suspense fallback={ <Loader /> } key={image.id}>
						<GifGridItem {...image} />
					</Suspense>
				))}
			</section>
		</section>
	);
};

export default GifGrid;

GifGrid.propTypes = {
	category: PropTypes.string,
};
