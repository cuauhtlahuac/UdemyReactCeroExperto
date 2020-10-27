
const NavBar = props => {
	return (
		<div className="navbar navbar-dark bg-dark mb-4">
			<span className="navbar-brand">Don Arturo</span>
			<button className="btn btn-outline-danger">
				<i className="fas fa-sign-out-alt" /> <span>Salir</span>
			</button>
		</div>
	);
};

export default NavBar;
