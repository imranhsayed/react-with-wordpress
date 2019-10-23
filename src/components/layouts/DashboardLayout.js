import React from 'react';
import SidebarMenu from "./../dashboard/sidebar/SidebarMenu";
import Content from "./../content/Content";

class DashboardLayout extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			active: false
		}
	}

	handleSidebarToggleClick = () => {
		this.setState( { active: ! this.state.active } )
	};


	render() {
		return(
			<React.Fragment>
				<SidebarMenu
					active={ this.state.active }
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
