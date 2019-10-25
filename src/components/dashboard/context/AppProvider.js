import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";

const AppProvider = ( props ) => {

	const [ menuStatus, setMenuActive ] = useState( {} );
	
	return (
		<AppContext.Provider value={ [ menuStatus, setMenuActive ] }>
			{ props.children }
		</AppContext.Provider>
	)
};

export default AppProvider;
