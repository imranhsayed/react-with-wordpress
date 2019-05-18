const express = require( 'express' );
const cors = require( 'cors' );
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const config = require( './config' );
const axios = require( 'axios' );
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const path = require('path')

const wordPressRestUrl = `${config.wordPressUrl}/${config.wordPressRestNameSpace}`;

console.log(wordPressRestUrl, 'wordpressurl')

const app = express();
app.use( cors() );

// Setting Paths
app.use('/static', express.static(path.join(__dirname, '/')));

// Setting views of the app
app.set('views', path.join(__dirname, './'));
app.set('view engine', 'pug');

// Parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: false } ) );

// Parse application/json
app.use(bodyParser.json());

// Adding webpack build
// Middleware of webpack
if (process.env.NODE_ENV === 'development') {
	console.log('in webpack hot middleware');
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath,
	}));
}


/**
 * Sign in user
 *
 * @route http://localhost:5000/sign-in
 */
app.post( '/sign-in', ( req, res ) => {

	jwt.sign( req.body ,config.tokenSecret , { expiresIn: 3600 }, ( err, token ) => {
		if ( ! token ) {
			res.json({ success: false, error: 'Token could not be generated' });
		} else {

			// Make a login request.
			axios.post( `${wordPressRestUrl}/user/login`, req.body )
				.then( response => {
					res.json( {
						success: true,
						status: 200,
						token,
						userData: response.data.user.data
					} );
				} )
				.catch( err => {
					const responseReceived = err.response.data;
					res.status(404).json({ success: false, status: 400, errorMessage: responseReceived.message });
				} );
		}

	} );
} );

/**
 * Create a new post
 *
 * @route http://localhost:5000/create-post
 */
app.post( '/create-post', ( req, res ) => {

	jwt.verify(req.body.token, config.tokenSecret, function ( err, decoded ) {
	if ( undefined !== decoded ) {

		const postData = {
			user_id: req.body.userID,
			title: req.body.title,
			content: req.body.content,
		};

		// Make a create post request.
		axios.post( `${wordPressRestUrl}/post/create`, postData )
			.then( response => {

				res.json( {
					success: true,
					status: 200,
					userData: response.data
				} );
			} )
			.catch( err => {
				const responseReceived = err.response.data;
				res.status(404).json({ success: false, status: 400, errorMessage: responseReceived.message });
			} );
	} else {
		res.status( 400 ).json( { success: false, status: 400, errorMessage: 'Authorization failed'} );
	}
});
} );

app.get('/', (req, res) => {
	res.render('index')
});

app.get('/login', (req, res) => {
	res.render('index')
});

app.get('/dashboard/:userName', (req, res) => {
	res.render('index')
});

app.get('/post/:id', (req, res) => {
	res.render('index')
});


app.listen( process.env.PORT || 5000, () => console.log( 'Listening on port 5000' ) );
