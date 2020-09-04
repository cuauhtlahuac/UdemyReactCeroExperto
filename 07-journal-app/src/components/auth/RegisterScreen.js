import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'hooks/useForm';

const RegisterScreen = () => {
	const initialState = {
		name: 'Cuauhtlahuac Aristeo',
		email: 'cui13@hotmail.com',
		password: '123456',
		password2: '123456',
	};

	const [ values, handleInputChange ] = useForm(initialState);

	const { name, email, password, password2 } = values;

	const handleSubmit = e => {
		e.preventDefault();
		console.log({ name, email, password, password2 });
	};

	return (
		<React.Fragment>
			<h3 className="auth__title mb-4">Login</h3>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<input
					className="auth__input"
					name="name"
					onChange={handleInputChange}
					placeholder="Name"
					type="text"
					value={name}
				/>
				<input
					className="auth__input"
					name="email"
					onChange={handleInputChange}
					placeholder="Email"
					type="text"
					value={email}
				/>
				<input
					className="auth__input"
					name="password"
					onChange={handleInputChange}
					placeholder="Password"
					type="password"
					value={password}
				/>

				<input
					className="auth__input"
					name="password2"
					onChange={handleInputChange}
					placeholder="Confirm password"
					type="password"
					value={password2}
				/>

				<button type="submit" className="btn btn-primary btn-block mt-2 mb-4">
					register
				</button>

				<Link to="/auth" className="link">
					You already register?
				</Link>
			</form>
		</React.Fragment>
	);
};

export default RegisterScreen;
