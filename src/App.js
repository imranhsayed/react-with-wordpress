import React from 'react';
import './style.css';
import Home from "./components/Home";
import { Router } from '@reach/router';

class App extends React.Component {

	render() {
		return (
			<Router>
				<Home path="/"/>
			</Router>
		);
	}
}

export default App;
