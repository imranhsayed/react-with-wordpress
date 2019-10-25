import React from 'react';
import './style.css';
import { Router } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/dashboard/posts/CreatePost";
import Posts from "./components/dashboard/posts/Posts";
import AppProvider from "./components/dashboard/context/AppProvider";
import Pages from "./components/dashboard/pages/Pages";

class App extends React.Component {

	render() {
		return (
			<AppProvider>
				<Router>
					<Home path="/"/>
					<Login path="/login"/>
					<Dashboard path="/dashboard"/>
					<Posts path="/dashboard/posts"/>
					<CreatePost path="/dashboard/create-post"/>
					<Pages path="/dashboard/pages"/>
					<SinglePost path="/post/:id"/>
				</Router>
			</AppProvider>
		);
	}
}

export default App;
