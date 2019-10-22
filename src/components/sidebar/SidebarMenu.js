import React, { useState } from 'react';

const SidebarMenu = ( props ) => {

	const [ subMenuActive, setSubMenuActive ] = useState( false );

	return (

			<nav id="sidebar" className={ props.active ? 'active' : '' }>
				<div className="sidebar-header">
					<h3>Dashboard</h3>
				</div>

				<ul className="list-unstyled components">
					<li className="active">
						<a
							href="#homeSubmenu"
							data-toggle="collapse"
							aria-expanded={ subMenuActive }
							className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` }
							onClick={ ()  => setSubMenuActive( ! subMenuActive ) }
						>
							Home
						</a>
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
