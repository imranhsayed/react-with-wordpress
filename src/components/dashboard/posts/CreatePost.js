import React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";
import Loader from '../../../loader.gif';
import clientConfig from "../../../client-config";
import axios from 'axios';

class CreatePost extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			content: '',
			postCreated: false,
			loading: false,
			message: '',
		}

	}

	createMarkup = ( data ) => ({
		__html: data
	});

	handleFormSubmit = ( event ) => {
		event.preventDefault();

		this.setState( { loading: true } );

		const formData = {
			title: this.state.title,
			content: this.state.content,
			status: 'publish'
		};

		const wordPressSiteUrl = clientConfig.siteUrl;
		const authToken = localStorage.getItem( 'token' );

		// Post request to create a post
		axios.post( `${ wordPressSiteUrl }/wp-json/wp/v2/posts`, formData, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${ authToken }`
			}
		} )
			.then( res => {

				this.setState( {
					loading: false,
					postCreated: !! res.data.id,
					message: res.data.id ? 'New post created' : ''
				} )
			} )
			.catch( err => {{

				this.setState( { loading: false, message: err.response.data.message } )
			}} )
	};

	handleInputChange = ( event ) => {

		this.setState( { [ event.target.name ]: event.target.value } );

	};

	render() {

		const { loading, message, postCreated } = this.state;

		return(
			<DashboardLayout>
				<form onSubmit={ this.handleFormSubmit } className="mt-5" style={{ maxWidth: '800px' }}>
					<legend className="mb-4">Create Post</legend>

					{ message ? <div className={ `alert ${ postCreated ? 'alert-success': 'alert-danger' }` } dangerouslySetInnerHTML={ this.createMarkup( message ) }/> : ''}

					{/*Title*/}
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" name="title" onChange={ this.handleInputChange } className="form-control" id="title"/>
					</div>

					{/*	Content*/}
					<div className="form-group">
						<label htmlFor="my-post-content">Content</label>
						<textarea name="content" className="form-control" id="my-post-content" onChange={ this.handleInputChange } rows="10"/>
					</div>

					{/*	Submit button*/}
					<button type="submit" className="btn btn-secondary">Submit</button>
					{ loading && <img className="loader" src={ Loader } alt="Loader"/> }
				</form>
			</DashboardLayout>
		)
	}
}
export default CreatePost;
