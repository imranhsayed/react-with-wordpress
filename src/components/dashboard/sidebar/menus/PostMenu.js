import React, { useContext } from 'react';
import NavLink from "../../../NavLink";
import AppContext from "../../../context/AppContext";

const PostMenu = () => {

	const [ store, setStore ] = useContext( AppContext );

	return(
		<li className={ '/dashboard/posts' === window.location.pathname ? 'active' : '' }>
			<NavLink
				to="/dashboard/posts"
				data-toggle="collapse"
				aria-expanded={ store.activeMenu.postMenuActive }
				className={ `dropdown-toggle ${ ! store.activeMenu.postMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => setStore({
					...store,
					activeMenu: {  postMenuActive: ! store.activeMenu.postMenuActive }
				}) }
			>
				Posts
			</NavLink>
			<ul className={ `collapse list-unstyled ${ store.activeMenu.postMenuActive ? 'show' : '' }` } id="homeSubmenu">
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
