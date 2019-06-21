import React from 'react';
import { Link } from '@reach/router';

class Navbar extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">React App</Link>

				<div className="collapse navbar-collapse" id="navbarColor02">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Login</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;
