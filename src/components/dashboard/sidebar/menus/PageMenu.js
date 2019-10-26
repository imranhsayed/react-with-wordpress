import React, { useContext } from 'react';
import NavLink from "../../../NavLink";
import AppContext from "../../../context/AppContext";

const PageMenu = () => {

	const [ store, setStore ] = useContext( AppContext );

	return(
		<li className={ '/dashboard/pages' === window.location.pathname ? 'active' : '' }>
			<NavLink
				to="/dashboard/pages"
				data-toggle="collapse"
				aria-expanded={ store.activeMenu.pageMenuActive }
				className={ `dropdown-toggle ${ ! store.activeMenu.pageMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => setStore({
					...store,
					activeMenu: { pageMenuActive: ! store.activeMenu.pageMenuActive }
				}) }
			>
				Pages
			</NavLink>
			<ul className={ `collapse list-unstyled ${ store.activeMenu.pageMenuActive ? 'show' : '' }` } id="homeSubmenu">
				<li>
					<a href="#">All Pages</a>
				</li>
				<li>
					<NavLink to="/dashboard/create-page">Add New</NavLink>
				</li>
			</ul>
		</li>
	)
};

export default PageMenu;
