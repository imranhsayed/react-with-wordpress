import React from 'react';
import Navbar from "./Navbar";
import CreatePost from "./CreatePost";

class Dashboard extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return(
			<React.Fragment>
				<Navbar/>
				<div className="jumbotron">
					<h4>Welcome {this.props.userName && this.props.userName }!!</h4>
					<CreatePost/>
				</div>
			</React.Fragment>
		)
	}
}

export default Dashboard;
