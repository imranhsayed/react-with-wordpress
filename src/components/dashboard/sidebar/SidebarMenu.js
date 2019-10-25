import React, { useState } from 'react';
import { getUserName } from "../../functions";
import NavLink from "../../NavLink";
import PostMenu from "./menus/PostsMenu";

const SidebarMenu = ( props ) => {

	const userName = ( getUserName() ) ? getUserName() : '';

	return (

			<nav id="sidebar" className={ props.active ? 'active' : '' }>
				<div className="sidebar-header">
					<NavLink to={ `/dashboard/${ userName }` }>React with WP</NavLink>
				</div>
				<ul className="list-unstyled components">
					<PostMenu/>
					<li>
						<a href="#">Pages</a>
					</li>
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
