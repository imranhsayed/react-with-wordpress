import React from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import clientConfig from "../client-config";

class Login extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			username: '',
			password: '',
			token: ''
		}
	}

	handleOnSubmit = ( event ) => {
		event.preventDefault();

		const restApiUrl = `${clientConfig.siteUrl}/wp-json/jwt-auth/v1/token`;

		const userData = {
			username: this.state.username,
			password: this.state.password
		};

		axios.post( restApiUrl, userData )
			.then( res => {
				console.warn( res.data );
				if ( res.data.token ) {
					localStorage.setItem( 'token', res.data.token );
					this.setState( { token: res.data.token } );
					window.location.href = '/dashboard';
				}
			} )
			.catch( err => console.warn( err.response.data ) );
	};

	handleOnChange = ( event ) => {
		this.setState( { [ event.target.name ]: event.target.value } );
	};

	componentDidMount() {
		const authToken = localStorage.getItem( 'token' );
		if ( authToken ) {
			window.location.href = '/dashboard';
		}
	}

	render() {

		const { username, password } = this.state;

		return(
			<div>
				<Navbar/>
				<div className="container mt-5">
					<h2>Login Form</h2>
					<form onSubmit={ this.handleOnSubmit }>
						<div className="form-group">
							<label htmlFor="">
								User
								<input onChange={ this.handleOnChange } name="username" type="text" value={ username } className="form-control"/>
							</label>
						</div>
						<div className="form-group">
							<label htmlFor="">
								Password
								<input onChange={ this.handleOnChange } name="password" type="password" value={ password } className="form-control"/>
							</label>
						</div>
						<button className="btn btn-primary" type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;
