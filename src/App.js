import React from 'react';
import './style.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

class App extends React.Component {

	render() {
		return (
			<Router>
				<Route exact component={ Home } path="/" />
				<Route exact component={ Login } path="/login" />
				<Route exact component={ Dashboard } path="/dashboard/:userName" />
				<Route exact component={ SinglePost } path="/post/:id" />
			</Router>
		);
	}
}

export default App;
