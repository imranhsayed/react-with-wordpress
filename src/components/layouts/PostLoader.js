import React from 'react';

const PostLoader = () => (
	<div className="container blog">
		<div className="post-wrapper">
			<a href="#" className="post-title loader-title"/>
			<div className="loader-img"/>
			<p className="post-excerpt mt-4 loader-excerpt"/>
			<div className="post-meta">
				<a href="#" className="post-author loader-author"/>
				<div className="post-date loader-date"/>
				<div className="post-category loader-category"/>
			</div>
		</div>
	</div>
);

export default PostLoader;
