import React from 'react';
import SidebarMenu from "./../dashboard/sidebar/SidebarMenu";
import Content from "./../content/Content";

const DashboardLayout = ( props ) =>  {

	return(
		<React.Fragment>
			<SidebarMenu/>
			<Content>
				{ props.children }
			</Content>
		</React.Fragment>
	)
};

export default DashboardLayout;
