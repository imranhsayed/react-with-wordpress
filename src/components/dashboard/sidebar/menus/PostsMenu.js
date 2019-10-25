import NavLink from "../../../NavLink";
import React, { useContext } from 'react';
import AppContext from "../../context/AppContext";

const PostMenu = ( props ) => {

	const [ menuStatus, setMenuActive ] = useContext(AppContext);
	console.warn( menuStatus );

	return (
		<li className="active">
			<NavLink
				to="/dashboard/all-posts"
				data-toggle="collapse"
				aria-expanded={ menuStatus.postMenuActive }
				className={ `dropdown-toggle ${ ! menuStatus.postMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => setMenuActive( { ...menuStatus, postMenuActive: ! menuStatus.postMenuActive } ) }
			>
				Posts
			</NavLink>
			<ul className={ `collapse list-unstyled ${ menuStatus.postMenuActive ? 'show' : '' }` } id="homeSubmenu">
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
