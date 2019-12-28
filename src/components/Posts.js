import React, { useState, useEffect } from 'react';
import clientConfig from "../client-config";
import axios from "axios";
import Loader from "./layouts/Loader";
import { Post } from "./layouts/Post";
import { Pagination } from "./layouts/Pagination";

export const Posts = ( props ) => {

	const [ currentPage, setCurrentPage ] = useState( props.pageId );

	const [ totalPages, setTotalPages ] = useState( 1 );
	const [ loading, setLoading ] = useState( false );
	const [ errMessage, setError ] = useState( '' );
	const [ posts, setPosts ] = useState( null );

	useEffect( () => {

		const wordPressSiteURL = clientConfig.siteUrl;

		setLoading( true );

		console.warn( 'came here', loading );

		axios.get( `${ wordPressSiteURL }/wp-json/rae/v1/posts?page_no=${ currentPage }` )
			.then( res => {

				console.warn( 'loading', loading );
				setLoading( false );

				if ( 200 === res.data.status ) {
					setPosts( res.data.posts_data );
					setTotalPages( res.data.page_count )
				} else {
					setError( 'No posts found' );
				}
			} )
			.catch( err => {
				setError( err.response.data.message );
			} );

	}, [ currentPage ] );

	return (
		<React.Fragment>
			{ loading ? <Loader/> : '' }
			<div className="container" style={ { overflow: 'hidden' }  }>
				{ ( ! loading && null !== posts && posts.length ) ? (
					posts.map( post => <Post key={ post.id } post={ post } /> )
				) : <div>{ errMessage }</div> }
				{ ( null !== posts && posts.length ) ? (
					<Pagination currentPage={ parseInt( currentPage ) } setCurrentPage={ setCurrentPage } totalPages={totalPages}/>
				) : <div>{ errMessage }</div> }
			</div>
		</React.Fragment>
	)

};

export default Posts;
