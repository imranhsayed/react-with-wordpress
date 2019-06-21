import React from 'react';
import './style.css';
import Home from "./components/Home";
import { Router } from '@reach/router';
import Post from './components/Post';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends React.Component {

	render() {
		return (
			<Router>
				<Home path="/"/>
				<Post path="/post/:id"/>
				<Login path="/login"/>
				<Dashboard path="/dashboard"/>
			</Router>
		);
	}
}

export default App;
