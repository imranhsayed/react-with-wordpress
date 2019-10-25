import NavLink from "../../../NavLink";
import React, { useContext } from 'react';
import AppContext from "../../context/AppContext";

const PageMenu = ( props ) => {

	const [ menuStatus, setMenuActive ] = useContext( AppContext );
	console.warn( menuStatus );

	return (
		<li className={ '/dashboard/pages' === window.location.pathname ? 'active' : '' }>
			<NavLink
				to="/dashboard/pages"
				data-toggle="collapse"
				aria-expanded={ menuStatus.pageMenuActive }
				className={ `dropdown-toggle ${ ! menuStatus.pageMenuActive ? 'collapsed' : '' }` }
				onClick={ ()  => setMenuActive( { pageMenuActive: ! menuStatus.pageMenuActive } ) }
			>
				Pages
			</NavLink>
			<ul className={ `collapse list-unstyled ${ menuStatus.pageMenuActive ? 'show' : '' }` } id="homeSubmenu">
				<li>
					<NavLink to="/dashboard/pages">All Pages</NavLink>
				</li>
				<li>
					<NavLink to="/dashboard/create-page">Add New</NavLink>
				</li>
			</ul>
		</li>
	)
};

export default PageMenu;
