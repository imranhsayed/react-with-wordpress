import React from 'react';
import './style.css';
import { Router } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/dashboard/posts/CreatePost";
import AllPosts from "./components/dashboard/posts/AllPosts";
import AppProvider from "./components/dashboard/context/AppProvider";

class App extends React.Component {

	render() {
		return (
			<AppProvider>
				<Router>
					<Home path="/"/>
					<Login path="/login"/>
					<Dashboard path="/dashboard/:userName"/>
					<AllPosts path="/dashboard/all-posts"/>
					<CreatePost path="/dashboard/create-post"/>
					<SinglePost path="/post/:id"/>
				</Router>
			</AppProvider>
		);
	}
}

export default App;
