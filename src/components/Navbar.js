import React from 'react';
import { Link } from '@reach/router';

class Navbar extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			isLoggedIn : false
		}
	}

	componentDidMount() {
		const authToken = localStorage.getItem( 'token' );
		if ( authToken ) {
			this.setState( { isLoggedIn: true } );
		}
	}

	handleLogoutClick = () => {
		localStorage.removeItem( 'token' );
		window.location.href = '/login';
	};

	render() {

		const { isLoggedIn } = this.state;

		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">React App</Link>

				<div className="collapse navbar-collapse" id="navbarColor02">
					<ul className="navbar-nav mr-auto">
						{ ! isLoggedIn ? (
								<li className="nav-item">
									<Link className="nav-link" to="/login">Login</Link>
								</li>
						) : (
							<React.Fragment>
								<li className="nav-item">
									<Link className="nav-link" to="/dashboard">Dashboard</Link>
								</li>
								<li className="nav-item">
								<button  onClick={ this.handleLogoutClick }>Logout</button>
								</li>
							</React.Fragment>
						) }
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
