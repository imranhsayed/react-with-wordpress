import React from 'react';
import Navbar from "./Navbar";
import renderHTML from "react-render-html";
import Moment from "react-moment";
import Loader from "../loader.gif";
import axios from "axios";
import clientConfig from "../client-config";

class SinglePost extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			post: {},
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
		const wordPressSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/${this.props.id}` )
				.then( res => {

					if ( Object.keys( res.data ).length ) {
						this.setState( { loading: false, post: res.data } );
					} else {
						this.setState( { loading: false, error: 'No Posts Found' } );
					}
				} )
				.catch( err => this.setState( { loading: false, error: err.response.data.message } ) );
		} )
	}

	render() {

		const { loading, post, error } = this.state;

		return(
			<React.Fragment>
				<Navbar/>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ Object.keys( post ).length ? (
					<div className="mt-5 posts-container">
						<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
							<div className="card-header">
								{renderHTML( post.title.rendered )}
							</div>
							<div className="card-body">
								<div className="card-text post-content">{ renderHTML( post.content.rendered ) }</div>
							</div>
							<div className="card-footer"><Moment fromNow >{post.date}</Moment></div>
						</div>
					</div>
				) : '' }
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }
			</React.Fragment>
		)
	}
}

export default SinglePost;
