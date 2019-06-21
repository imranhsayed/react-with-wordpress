import React from 'react';
import './style.css';
import Home from "./components/Home";
import { Router } from '@reach/router';
import Post from './components/Post';

class App extends React.Component {

	render() {
		return (
			<Router>
				<Home path="/"/>
				<Post path="/post/:id"/>
			</Router>
		);
	}
}

export default App;
