import React from 'react';
import clientConfig from "../client-config";
import axios from "axios";
import renderHTML from "react-render-html";
import { Link } from "@reach/router";
import Navbar from "./Navbar";
import Loader from "../loader.gif";

class Post extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			post: null,
			loading: true
		}
	}

	componentDidMount() {
		const restApiUrl = `${clientConfig.siteUrl}/wp-json/wp/v2/posts/${this.props.id}`;

		axios.get( restApiUrl )
			.then( res => {
				console.warn( res.data );
				if ( res.data ) {
					this.setState( { post: res.data, loading: false } );
				}
			} )
			.catch( err => console.warn( err.response.data ) );
	}

	render() {

		const { post, loading } = this.state;

		return (
			<div>
				<Navbar/>
				{ loading && <img className="loader" src={ Loader } /> }
				{ post && (
					<div className="card mb-3" key={ post.id }>
						<h3 className="card-header">{ post.title.rendered }</h3>
						<div className="card-body">
							{ renderHTML( post.content.rendered ) }
						</div>
					</div>
				) }
			</div>
		)
	}
}

export default Post;
