import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'hooks/useForm';

const LoginScreen = () => {
	const initialState = { email: 'cuitlagua@gmail.com', password: '4815926' };

	const [ values, handleInputChange ] = useForm(initialState);

	const { email, password } = values;

	const handleSubmit = ( event ) => {
		event.preventDefault();
		// Aqui haremos nuestro primer dispatch
	}
	

	return (
		<React.Fragment>
			<h3 className="auth__title mb-4">Login</h3>
			<form autoComplete="off" onSubmit={ handleSubmit }>
				<input
					className="auth__input"
					placeholder="Email"
					name="email"
					onChange={handleInputChange}
					type="text"
					value={email}
				/>

				<input
					className="auth__input"
					placeholder="Password"
					name="password"
					onChange={handleInputChange}
					type="password"
					value={password}
				/>

				<button type="submit" className="btn btn-primary btn-block mt-2">
					Login
				</button>

				<div className="auth__social-networks">
					<p>Login with social network</p>

					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>

						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to="/auth/register" className="link">
					Create a new account
				</Link>
			</form>
		</React.Fragment>
	);
};

export default LoginScreen;
