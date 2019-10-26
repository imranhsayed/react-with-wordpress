import React, { useState } from 'react';
import AppContext from "./AppContext";

const AppProvider = ( props ) => {

	const [ menuStatus, setMenuActive ] = useState( {} );
	const [ user, setUser ] = useState( {} );

	return (
		<AppContext.Provider value={ [ menuStatus, setMenuActive, user, setUser ] }>
			{ props.children }
		</AppContext.Provider>
	)
};

export default AppProvider;
