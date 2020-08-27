import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
	return (
		<React.Fragment>
			<h3 className="auth__title mb-4">Login</h3>
			<form>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
				/>

				<input
					type="text"
					placeholder="Password"
					name="password"
					className="auth__input"
				/>

				<button
				 type="submit"
				 className="btn btn-primary btn-block mt-2"
				>
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

				<Link to="/auth/register">Create a new account</Link>
			</form>
		</React.Fragment>
	);
};

export default LoginScreen;
