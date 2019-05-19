import React from 'react';
import Navbar from "./Navbar";

class Dashboard extends React.Component {

	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const siteUrl = 'http://localhost:8888/wordpress';
		fetch( `${siteUrl}/wp-json/wp/v2/posts`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify( { title: 'Hello', content: 'content' } )
		} )
			.then( ( res ) => {
				res.json()
					.then( ( data ) => {
						console.warn( 'came', data );

					} )
			} )
			.catch( err => console.warn( err ) );
	};


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
