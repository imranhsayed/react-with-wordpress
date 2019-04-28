import React from 'react';
import Navbar from "./Navbar";

class Dashboard extends React.Component {
	render() {
		return (
			<React.Component>
				<Navbar/>
				<div className="jumbotron">
					<h4>Welcome User!!</h4>
				</div>
			</React.Component>
		)
	}
}

export default Dashboard;
