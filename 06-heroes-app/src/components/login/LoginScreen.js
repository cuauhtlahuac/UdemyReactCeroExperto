import React, { useContext } from 'react';
import { AuthContext } from 'contexts/authContext';
import { types } from 'types/types';

const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		dispatch({
			type: types.login,
			payload: { name: 'Cuauhtlahuac' },
		});

		history.replace('/');
	};

	return (
		<div className="m-5">
			<h1>Login</h1>
			<hr />

			<button className="btn btn-primary" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
