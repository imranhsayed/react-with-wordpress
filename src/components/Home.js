import React from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import clientConfig from '../client-config';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			posts: null,
			loading: true
		}
	}

	componentDidMount() {
		const restApiUrl = `${clientConfig.siteUrl}/wp-json/wp/v2/posts`;

		axios.get( restApiUrl )
			.then( res => {
				if ( res.data.length ) {
					this.setState( { posts: res.data, loading: false } );
				}
			} )
			.catch( err => console.warn( err.response.data ) );
	}

	render() {

		const { posts } = this.state;

		return(
			<div>
				<Navbar/>
				{ posts && posts.length && (
					posts.map( post => (
						<div className="card mb-3" key={ post.id }>
							<h3 className="card-header">{ post.title.rendered }</h3>
							<div className="card-body">
								{ post.content.rendered }
							</div>
						</div>
					) )
				) }
			</div>
		)
	}
}

export default Home;
