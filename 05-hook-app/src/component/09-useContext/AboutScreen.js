import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
	const user = useContext(UserContext);

	return (
		<div>
			<h1>AboutScreen</h1>
			<hr />
		</div>
	);
};

export default AboutScreen;
