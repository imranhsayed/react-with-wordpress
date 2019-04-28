import React from 'react';
import './style.css';
import Login from "./components/Login";
import { Router } from "@reach/router";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Login to="/login"/>
				<Dashboard to="/dashboard"/>
			</Router>
		);
	}
}

export default App;
