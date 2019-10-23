import React, { useState } from 'react';
import { getUserName } from "../../functions";
import NavLink from "../../NavLink";

const SidebarMenu = ( props ) => {

	const [ subMenuActive, setSubMenuActive ] = useState( false );
	const userName = ( getUserName() ) ? getUserName() : '';

	return (

			<nav id="sidebar" className={ props.active ? 'active' : '' }>
				<div className="sidebar-header">
					<NavLink to={ `/dashboard/${ userName }` }>React with WP</NavLink>
				</div>

				<ul className="list-unstyled components">
					<li className="active">
						<NavLink
							to={ `/dashboard/posts` }
							data-toggle="collapse"
							aria-expanded={ subMenuActive }
							className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` }
							onClick={ ()  => setSubMenuActive( ! subMenuActive ) }
						>
							Home
						</NavLink>
						<ul className={ `collapse list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu">
							<li>
								<a href="#">Home 1</a>
							</li>
							<li>
								<a href="#">Home 2</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Portfolio</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>

	)
};

export default SidebarMenu;
