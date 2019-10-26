import React, { useContext } from 'react';
import NavLink from "../../NavLink";
import PostMenu from "./menus/PostMenu";
import PageMenu from "./menus/PageMenu";
import AppContext from "../context/AppContext";

const SidebarMenu = ( props ) => {

	const [ store, setStore ] = useContext( AppContext );

	return (

			<nav id="sidebar" className={ store.sidebarActive ? 'active' : '' }>
				<div className="sidebar-header">
					<NavLink to={ `/dashboard` }>React with WP</NavLink>
				</div>
				<ul className="list-unstyled components">
					<PostMenu/>
					<PageMenu/>
					<li>
						<a href="#">Media</a>
					</li>
					<li>
						<a href="#">Users</a>
					</li>
				</ul>
			</nav>
	)
};

export default SidebarMenu;
