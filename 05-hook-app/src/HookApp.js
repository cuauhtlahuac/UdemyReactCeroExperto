import React from 'react';
import { CounterApp } from 'component/01-useState/CounterApp';

export const HookApp = () => {
	return (
		<div className="container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light row my-md-5">
				<h1>
					Hook App
				</h1>
			</nav>
            <section>
                <CounterApp />
            </section>
		</div>
	);
};
