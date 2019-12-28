import React from 'react';
import FeaturedImage from "./FeaturedImage";

export const Post = ( props ) => {

	const { post } = props;

	return (
		<div className="post-wrapper">

			{/*TItle*/}
			{ post.title ? <h2 className="post-title">{ post.title }</h2> : '' }

			{/*Featured Image*/}
			{ post.attachment_image.img_sizes ? <FeaturedImage image={ post.attachment_image }/> : '' }

			{/*Post meta*/}
			<div className="post-meta">
				{/*Author*/}
				<a href={ `/author/${ post.meta.author_id }` } className="post-author">
					<i className="fa fa-user"/>
					<span>{ post.meta.author_name }</span>
				</a>
				{/*Date*/}
				<div className="post-date">
					<i className="fa fa-clock-o"/>
					<span>{ post.date }</span>
				</div>

				{/*	Categories*/}
				{ post.categories.length ? (
					<div className="post-category">
						<i className="fa fa-folder"/>
						{
							post.categories.map( category => (
								<a href={ `category/${ category.term_id }` } key={ category.term_id }>{ category.name }</a>
							) )
						}
					</div>
				) : '' }
			</div>
		</div>
	)
};
