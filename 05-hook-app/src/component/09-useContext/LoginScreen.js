import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
	const { setUser } = useContext(UserContext);
	return (
		<div>
			<h1>LoginScreen</h1>
			<hr />
			<button
				className="btn btn-primary"
				onClick={() => setUser({ id: 132, name: 'Petronila' })}
			>
				Click
			</button>
		</div>
	);
};

export default LoginScreen;
