import React from 'react';
import SidebarMenu from "./sidebar/SidebarMenu";
import Content from "./content/Content";

class Dashboard extends React.Component {

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
					userName={ this.props.userName }
					handleSidebarToggleClick={ this.handleSidebarToggleClick }
					active={ this.state.active }
				/>
			</React.Fragment>
		)
	}
}

export default Dashboard;
