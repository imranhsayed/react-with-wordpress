import React from 'react';
import SidebarMenu from "./../dashboard/sidebar/SidebarMenu";
import Content from "./../content/Content";

class DashboardLayout extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			active: false,
			subMenuActive: false
		}
	}

	handleSidebarToggleClick = () => {
		this.setState( { active: ! this.state.active } )
	};

	handleSubMenuActive = () => {
		this.setState( { subMenuActive: ! this.state.subMenuActive } )
	};


	render() {
		return(
			<React.Fragment>
				<SidebarMenu
					active={ this.state.active }
					subMenuActive={ this.state.subMenuActive }
					setSubMenuActive={ this.handleSubMenuActive }
				/>
				<Content
					handleSidebarToggleClick={ this.handleSidebarToggleClick }
					active={ this.state.active }
				>
					{ this.props.children }
				</Content>

			</React.Fragment>
		)
	}
}

export default DashboardLayout;
