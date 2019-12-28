import React from 'react';
import Navbar from "./Navbar";
import { Posts } from "./Posts";

const Blogs = () => {

return (
	<React.Fragment>
		<Navbar/>
		<Posts pageId={ 1 } />
	</React.Fragment>
)
};

export default Blogs;
