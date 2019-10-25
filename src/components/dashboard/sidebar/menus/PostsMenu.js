import NavLink from "../../../NavLink";
import React from 'react';

const PostMenu = ( props ) => {

	return (
		<li className="active">
			<NavLink
				to="/dashboard/all-posts"
				data-toggle="collapse"
				aria-expanded={ props.subMenuActive }
				className={ `dropdown-toggle ${ ! props.subMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => props.setSubMenuActive( ! props.subMenuActive ) }
			>
				Posts
			</NavLink>
			<ul className={ `collapse list-unstyled ${ props.subMenuActive ? 'show' : '' }` } id="homeSubmenu">
				<li>
					<NavLink to="/dashboard/all-posts">All Posts</NavLink>
				</li>
				<li>
					<NavLink to="/dashboard/create-post">Add New</NavLink>
				</li>
			</ul>
		</li>
	)
};

export default PostMenu;
