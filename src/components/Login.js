import React from 'react';
import Navbar from "./Navbar";
import { Redirect } from "@reach/router";
import axios from 'axios';
import Loader from '../loader.gif';

class Login extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			username: '',
			password: '',
			userNiceName: '',
			userEmail: '',
			loggedIn: false,
			loading: false,
			error: ''
		}
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	onFormSubmit = ( event ) => {
		event.preventDefault();

		const siteUrl = 'http://localhost:5000';

		const loginData = {
			username: this.state.username,
			password: this.state.password
		};

		this.setState( { loading: true } );

		axios.post( `${siteUrl}/sign-in`, loginData )
			.then( ( res ) => {


				const { token } = res.data;
				const { user_nicename, user_email } = res.data.userData;

				if (  undefined === token ) {
					this.setState( { error: data.message, loading: false } );
					return;
				}

				const userNiceName = ( user_nicename ) ? user_nicename : '';
				const userEmail = ( user_email ) ? user_email : '';

				localStorage.setItem( 'token', token );
				localStorage.setItem( 'userName', userNiceName );

				this.setState( { userNiceName, userEmail, loggedIn: true, loading: false } )

			} )
			.catch( err => this.setState( { error: err.message, loading: false } ) );
	};

	handleOnChange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } );
	};

	render() {

		const { username, password, userNiceName, loggedIn, error, loading } = this.state;

		const user = ( userNiceName ) ? userNiceName : localStorage.getItem( 'userName' );

		if ( loggedIn || localStorage.getItem( 'token' ) ) {
			return ( <Redirect to={`/dashboard/${user}`} noThrow /> )
		} else {
			return (
				<React.Fragment>
					<Navbar/>
					<div className="jumbotron">
						<h4>Login</h4>
						{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
						<form onSubmit={ this.onFormSubmit }>
							<label className="form-group">
								Username:
								<input
									type="text"
									className="form-control"
									name="username"
									value={ username }
									onChange={ this.handleOnChange }
								/>
							</label>
							<br/>
							<label className="form-group">
								Password:
								<input
									type="password"
									className="form-control"
									name="password"
									value={ password }
									onChange={ this.handleOnChange }
								/>
							</label>
							<br/>
							<button className="btn btn-primary mb-3" type="submit">Login</button>
							<p>{ loading && <img src={Loader} alt="Loader"/> }</p>
						</form>
					</div>
				</React.Fragment>
			)
		}

	}
}

export default Login;
