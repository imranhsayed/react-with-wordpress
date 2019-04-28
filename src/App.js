import React from 'react';
import './style.css';
import Login from "./components/Login";
import { Router } from "@reach/router";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/"/>
				<Login path="/login"/>
				<Dashboard path="/dashboard"/>
			</Router>
		);
	}
}

export default App;
