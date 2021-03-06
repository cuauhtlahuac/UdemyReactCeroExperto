const NavBar = ({ name, onLogout }) => {
	return (
		<div className="navbar navbar-dark bg-dark mb-4">
			<span className="navbar-brand">{name}</span>
			<button
			 	className="btn btn-outline-danger"
			  onClick={onLogout}
			>

			<i className="fas fa-sign-out-alt" />
			<span>Salir</span>
			</button>
		</div>
	);
};

export default NavBar;
