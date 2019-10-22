import React from "react";

const MainContent = ( props ) => {
	return (
		<div className="main-content">
			<h4>Welcome { props.userName && props.userName }!!</h4>
		</div>
	)
};

export default MainContent;
