# React with WordPress

:fire: Example of react application to access WordPress REST API

## Post Listings Demo :video_camera:

![](render-posts.gif)

## Installation

1. Clone this repo in `git clone https://github.com/imranhsayed/react-workshop`

2. Run `npm install`

## Branches
1. [login-with-jwt-wordpress-plugin](https://github.com/imranhsayed/react-with-wordpress/tree/login-with-jwt-wordpress-plugin)

> A React App where you can login using the endpoint provided by `JWT Authentication for WP-API` WordPress Plugin.
So you need to have this plugin installed on WordPress. The plugin's endpoint returns the user object and a jwt-token on success,
which we can then store in localstorage and login the user on front React Application

2. [jwt-verify-with-node](https://github.com/imranhsayed/react-with-wordpress/tree/jwt-verify-with-node)  

> A React(front end) + Node(back end) application. It uses `jwt.sign()` ( from `jwtwebtoken` npm package ) to generate a token using the username and password
sent from front end( React ) and returns it as a response, which we then store in localstorage to login the user.
This token received by frond end, will be sent with all further request for protected routes, which will then be verified in node route
using `jwt.verify()`
Besides generating the token, the end point in node also accesses the WordPress rest api to confirm the credentials and returns the user object
or errors if any.

> It also has functionality to create post where we make a request from front end along with token( React ) to a node end point.
The node endpoint verifies the token and then makes a request to WordPress REST API endpoint to create the post and then returns the
new post id, or error if any.

## Commands

- `dev` Runs webpack dev server for development ( in watch mode )
- `prod` Runs webpack in production mode

