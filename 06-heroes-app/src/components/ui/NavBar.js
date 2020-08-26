import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import { AuthContext } from 'contexts/authContext';
import { types } from 'types/types';

const Navbar = (props) => {
	const { user, dispatch } = useContext(AuthContext);
	
	let history = useHistory();
	
	const handleLogout = () => {	

		history.replace('/login');

		dispatch({ type: types.logout });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
			<Link className="navbar-brand" to="/">
				Home
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/dc"
					>
						DC
					</NavLink>

					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">{user.name}</span>
					<button
						className="nav-item nav-link btn btn-outline-primary"
						onClick={handleLogout}
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
