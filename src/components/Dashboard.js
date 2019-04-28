import React from 'react';
import Navbar from "./Navbar";

class Dashboard extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		console.warn( localStorage.getItem( 'token' ) );
		return(
			<React.Fragment>
				<Navbar/>
				<div className="jumbotron">
					<h4>Welcome {this.props.userName && this.props.userName }!!</h4>
				</div>
			</React.Fragment>
		)
	}
}

export default Dashboard;
