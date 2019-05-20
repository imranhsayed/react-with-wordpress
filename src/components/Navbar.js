import React from 'react';
import { Link } from "@reach/router";
import NavLink from './NavLink';
import { isLoggedIn, getUserName } from "./functions";

class Navbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	handleLogout = () => {
		localStorage.removeItem( 'token' );
		window.location.href = '/';
	};

	render() {
		const userName = ( getUserName() ) ? getUserName() : '';

		return (
			<nav className="navbar my-navbar navbar-expand-lg navbar-dark bg-dark">
				<div >
					<ul className="navbar-nav my-navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink to="/">Home</NavLink>
						</li>
						{ isLoggedIn() ? (
							<React.Fragment>
								<li className="nav-item">
									<NavLink to={ `/dashboard/${ userName }` }>Dashboard</NavLink>
								</li>
								<li className="nav-item">
									<button onClick={ this.handleLogout } className="btn btn-secondary ml-3">Logout</button>
								</li>
							</React.Fragment>
						) : (
							<li className="nav-item">
								<NavLink to="/login">Login</NavLink>
							</li>
						) }
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
