import React from 'react';

import Layout from 'component/05-useLayoutEffect/Layout';

export const HookApp = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light
					   	    bg-light row my-md-5 my-sm-3">

				<h1>Hook App</h1>
			</nav>

			<section className="mb-5">
				<Layout />
			</section>
		</div>
	);
};
