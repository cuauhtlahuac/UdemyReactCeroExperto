import React from 'react';
import FocusScreen from 'component/04-useRef/FocusScreen';


export const HookApp = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light
					   	    bg-light row my-md-5 my-sm-3">

				<h1>Hook App</h1>
			</nav>

			<section className="mb-5">
				<FocusScreen />
			</section>
		</div>
	);
};
