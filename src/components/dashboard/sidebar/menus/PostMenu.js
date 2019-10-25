import NavLink from "../../../NavLink";
import React, { useContext } from 'react';
import AppContext from "../../context/AppContext";

const PostMenu = ( props ) => {

	const [ menuStatus, setMenuActive ] = useContext( AppContext );

	return (
		<li className={ '/dashboard/posts' === window.location.pathname ? 'active' : '' }>
			<NavLink
				to="/dashboard/posts"
				data-toggle="collapse"
				aria-expanded={ menuStatus.postMenuActive }
				className={ `dropdown-toggle ${ ! menuStatus.postMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => setMenuActive( { postMenuActive: ! menuStatus.postMenuActive } ) }
			>
				Posts
			</NavLink>
			<ul className={ `collapse list-unstyled ${ menuStatus.postMenuActive ? 'show' : '' }` } id="homeSubmenu">
				<li>
					<NavLink to="/dashboard/posts">All Posts</NavLink>
				</li>
				<li>
					<NavLink to="/dashboard/create-post">Add New</NavLink>
				</li>
			</ul>
		</li>
	)
};

export default PostMenu;
