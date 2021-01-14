import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import isEqual from 'lodash/isEqual';

import { useForm } from 'hooks/useForm';
import { startLogin, startRegister } from 'actions/authActions';

import './login.css';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const initialLoginState = {
		loginEmail: '',
		loginPassword: '',
	};

	const initialRegisterState = {
		registerName: '',
		registerEmail: '',
		registerPassword: '',
		registerRepeatPassword: '',
	};

	const [ formLoginValues, handleLoginInputChange ] = useForm(
		initialLoginState,
	);

	const [ formRegisterValues, handleRegisterInputChange ] = useForm(
		initialRegisterState,
	);

	const { loginEmail, loginPassword } = formLoginValues;

	const {
		registerName,
		registerEmail,
		registerPassword,
		registerRepeatPassword,
	} = formRegisterValues;

	const handleLogin = event => {
		event.preventDefault();

		dispatch(startLogin(loginEmail, loginPassword));
	};

	const handleRegister = event => {
		event.preventDefault();

		if (isEqual(registerPassword, registerRepeatPassword)) {
			dispatch(startRegister(formRegisterValues));
		} else {
			Swal.fire('Password Incorrecto', 'Los passwords son diferentes', 'error');
		}
	};

	return (
		<div className="container login-container">
			<div className="row">
				<div className="col-md-6 login-form-1">
					<h3>Ingreso</h3>

					<form onSubmit={handleLogin}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="email"
								name="loginEmail"
								value={loginEmail}
								onChange={handleLoginInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="password"
								name="loginPassword"
								value={loginPassword}
								onChange={handleLoginInputChange}
							/>
						</div>
						<div className="form-group">
							<input type="submit" className="btnSubmit" value="Login" />
						</div>
					</form>
				</div>

				<div className="col-md-6 login-form-2">
					<h3>Registro</h3>
					<form onSubmit={handleRegister}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre"
								name="registerName"
								value={registerName}
								onChange={handleRegisterInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								placeholder="Correo"
								name="registerEmail"
								value={registerEmail}
								onChange={handleRegisterInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="Contraseña"
								name="registerPassword"
								value={registerPassword}
								onChange={handleRegisterInputChange}
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="Repita la contraseña"
								name="registerRepeatPassword"
								value={registerRepeatPassword}
								onChange={handleRegisterInputChange}
							/>
						</div>

						<div className="form-group">
							<input type="submit" className="btnSubmit" value="Crear cuenta" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
