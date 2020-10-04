import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from 'actions/auth';

const LoginScreen = () => {
	const initialState = { email: 'cui13@hotmail.com', password: '123456' };

	const [ values, handleInputChange ] = useForm(initialState);
	const dispatch = useDispatch();
	const localState = useSelector(globalState => globalState.ui);

	const { msgError, loading } = localState;

	const { email, password } = values;

	const handleSubmit = event => {
		event.preventDefault();

		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<h3 className="auth__title mb-4">Login</h3>
			<div className="auth_alert_error">
				{msgError && (
					<span>
						<span role="img" aria-label="warning">
							🚫
						</span>{' '}
						{msgError}
					</span>
				)}
			</div>
			<form autoComplete="off" onSubmit={handleSubmit}>
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

				<button
					type="submit"
					className="btn btn-primary btn-block mt-2"
					disabled={loading}
				>
					Login
				</button>

				<div className="auth__social-networks">
					<p>Login with social network</p>

					<div className="google-btn" onClick={handleGoogleLogin}>
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
		</div>
	);
};

export default LoginScreen;
