import React from 'react';
import './style.css';
import { Router } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/"/>
				<Login path="/login"/>
				<Dashboard path="/dashboard/:userName"/>
			</Router>
		);
	}
}

export default App;
