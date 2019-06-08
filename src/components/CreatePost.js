import React from 'react';
import axios from 'axios';
import Loader from '../loader.gif';
import clientConfig from '../client-config';

class CreatePost extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			content: '',
			userID: '',
			token: '',
			postCreated: false,
			message: '',
			loading: false
		}
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	handleInputChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleFormSubmit = ( event ) => {
		event.preventDefault();
		this.setState( { loading: true } );

		const formData = {
			author: this.state.userID,
			title: this.state.title,
			content: this.state.content,
			status: 'publish'
		};

		const wordPressSiteUrl = clientConfig.siteUrl;
		const authToken = localStorage.getItem( 'token' );

		/**
		 * Make a post request to node server route '/create-post',
		 * to create a new post on WordPress
		 */
		axios.post( `${wordPressSiteUrl}/wp-json/wp/v2/posts`, formData, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken}`
			}
		} )
			.then( res => {
				this.setState( {
					loading: false,
					postCreated: !! res.data.id,
					message: res.data.id ? 'New Post Created' : ''
				} );
			} )
			.catch( err => {
				this.setState( { loading: false, message: err.response.data.message } );
			} );
	};

	componentDidMount() {
		const userID = localStorage.getItem( 'userID' );
		const token = localStorage.getItem( 'token' );
		this.setState( { userID, token } );
	}

	render() {

		const { loading, message, postCreated } = this.state;

		return(
			<form onSubmit={ this.handleFormSubmit } className="mt-5" style={{maxWidth: '800px'}}>
				<fieldset>
					<legend className="mb-4">Create Post</legend>

					{ message && <div className={ `alert ${ postCreated ? 'alert-success' : 'alert-danger' }` } dangerouslySetInnerHTML={ this.createMarkup( message ) }/> }

					<div className="form-group">
						<label htmlFor="title">Title</label>

						<input type="text" name="title" onChange={ this.handleInputChange } className="form-control" id="title"/>

					</div>
					<div className="form-group">
						<label htmlFor="content">Content</label>
						<textarea name="content" className="form-control" onChange={ this.handleInputChange } id="content" rows="3"/>
					</div>

					<button type="submit" className="btn btn-secondary">Submit</button>
				</fieldset>
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }
			</form>
		)
	}
}
export default CreatePost;
