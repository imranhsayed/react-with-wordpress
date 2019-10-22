import React from 'react';
import Navbar from "../Navbar";
import MainContent from "./MainContent";

const Content = ( props ) => {
	return (
		<div id="content" className={ props.active ? 'active' : '' }>
			<Navbar
				handleSidebarToggleClick={ props.handleSidebarToggleClick }
				active={ props.active }
			/>
			<MainContent
				userName={ props.userName }
			/>
		</div>
	)
};

export default Content;
