import React from 'react';
import { Link } from "react-router-dom";
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
							<Link to="/" className="nav-link">Home</Link>
						</li>
						{ isLoggedIn() ? (
							<React.Fragment>
								<li className="nav-item">
									<Link to={ `/dashboard/${ userName }` } className="nav-link">Dashboard</Link>
								</li>
								<li className="nav-item">
									<button onClick={ this.handleLogout } className="btn btn-secondary ml-3">Logout</button>
								</li>
							</React.Fragment>
						) : (
							<li className="nav-item">
								<Link to="/login" className="nav-link">Login</Link>
							</li>
						) }
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
