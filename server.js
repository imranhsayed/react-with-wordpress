const express = require( 'express' );

const app = express();
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
app.use( bodyParser() );

app.get( '/hello', ( req, res ) => {
	console.warn( 'hello' );
} );

app.post( '/login', ( req, res ) => {
	jwt.sign({ data: 'foobar' }, 'secret', { expiresIn: 60 * 60 }, ( err, token ) => {
		if ( !token ) {
			res.json( {success: false, error: 'Token could not be registered' });
		} else {
			console.warn( token );
		}
	})
} );

app.listen( 5000, () => { console.warn( 'Listening at port 5000' ) } );

