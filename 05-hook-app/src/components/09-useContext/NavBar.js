import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<NavLink
           activeClassName="active"
           className="nav-link"
           to="/"
           exact
           >
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						activeClassName="active"
						className="nav-link"
						to="/login"
						exact
					>
						Login
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						activeClassName="active"
						className="nav-link"
						to="/about"
						exact
					>
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
