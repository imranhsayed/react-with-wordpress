import React from 'react';
import { Link } from "@reach/router";
import NavLink from './NavLink';

const Navbar = () => (
	<nav className="navbar my-navbar navbar-expand-lg navbar-dark bg-dark">
		<Link className="navbar-brand" to="/">Home</Link>
		<div >
			<ul className="navbar-nav my-navbar-nav mr-auto">
				<li className="nav-item">
					<NavLink to="/login">Login</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/dashboard">Dashboard</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/logout">Logout</NavLink>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
