import NavLink from "../../../NavLink";
import React, { useState } from 'react';

const PostMenu = () => {

	const [ subMenuActive, setSubMenuActive ] = useState( false );

	return (
		<li className="active">
			<NavLink
				to="#"
				data-toggle="collapse"
				aria-expanded={ subMenuActive }
				className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => setSubMenuActive( ! subMenuActive ) }
			>
				Posts
			</NavLink>
			<ul className={ `collapse list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu">
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
