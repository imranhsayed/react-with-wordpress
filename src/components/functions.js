export const isLoggedIn = () => {
	return localStorage.getItem( 'token' );
};

export const getUserName = () => (
	localStorage.getItem( 'userName' )
);
