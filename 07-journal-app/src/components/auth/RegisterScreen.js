import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import isLength from 'validator/lib/isLength';

import { useForm } from 'hooks/useForm';
import { uiRemoveErrorAction, uiSetErrorAction } from 'actions/ui';
import { startRegisterWithFormData } from 'actions/auth';

const RegisterScreen = () => {
	const initialState = {
		name: 'Cuauhtlahuac Aristeo',
		email: 'cui13@hotmail.com',
		password: '123456',
		password2: '123456',
	};

	const dispatch = useDispatch();
	const localState = useSelector(globalState => globalState.ui);
	const [ values, handleInputChange ] = useForm(initialState);

	const { msgError } = localState;

	const { name, email, password, password2 } = values;

	const handleSubmit = e => {
		e.preventDefault();

		if (isAuthFormValid()) {
			dispatch(startRegisterWithFormData(email, password, name));
		}
	};

	const isAuthFormValid = () => {
		let error = { status: false, msg: '' };

		if (isEmpty(name, { ignore_whitespace: true })) {
			error = { status: true, msg: 'Name is Required' };
		} else if (!isEmail(email)) {
			error = { status: true, msg: 'Is not a valid Email' };
		} else if (!isLength(password, { min: 6 })) {
			error = { status: true, msg: 'Password must have at least 6 chars' };
		} else if (!equals(password, password2)) {
			error = { status: true, msg: 'Password are different' };
		}

		if (error.status) {
			dispatch(uiSetErrorAction(error.msg));

			return false;
		} else {
			dispatch(uiRemoveErrorAction());

			return true;
		}
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
		</div>
	);
};

export default RegisterScreen;
