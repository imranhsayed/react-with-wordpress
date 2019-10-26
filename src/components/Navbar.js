import React from 'react';
import NavLink from './NavLink';
import { isLoggedIn } from "./functions";
import ToggleSidebarBtn from "./dashboard/sidebar/ToggleSidebarBtn";

class Navbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	handleLogout = () => {
		localStorage.removeItem( 'token' );
		window.location.href = '/';
	};

	render() {

		return (
			<nav className="navbar my-navbar navbar-expand-lg main-navbar">
				<div >
					<ul className="navbar-nav my-navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink to="/">Home</NavLink>
						</li>
						{ isLoggedIn() ? (
							<React.Fragment>
								<li className="nav-item">
									<NavLink to={ `/dashboard` }>Dashboard</NavLink>
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
			{/*	If on dashboard page */}
				{ '/dashboard' === location.pathname ? (
					<ToggleSidebarBtn
						handleSidebarToggleClick={ this.props.handleSidebarToggleClick }
						active={ this.props.active }
					/>
				) : ''}
			</nav>
		);
	}
}

export default Navbar;
