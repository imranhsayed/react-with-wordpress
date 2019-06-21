import React from 'react';
import Navbar from "./Navbar";

class Dashboard extends React.Component {

	componentDidMount() {
		const authToken = localStorage.getItem( 'token' );
		if ( ! authToken ) {
			window.location.href = '/login';
		}
	}

	render() {
		return(
			<div>
				<Navbar/>
				Dashboard
			</div>
		)
	}
}

export default Dashboard;
