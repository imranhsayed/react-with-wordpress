import React from 'react';
import FeaturedImage from "./FeaturedImage";

export const Post = ( props ) => {

	const { post } = props;

	return (
		<div className="post-wrapper">

			{/*TItle*/}
			{ post.title ? <a href={`/post/${ post.id }`} className="post-title">{ post.title }</a> : '' }

			{/*Featured Image*/}
			{ post.attachment_image.img_sizes ? <FeaturedImage image={ post.attachment_image }/> : '' }

			{/*Excerpt*/}
			{ post.title ? <p className="post-excerpt mt-4">{ post.excerpt }</p> : '' }

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
							post.categories.map( ( category, index ) => {
								return (
									// If its not the last item.
									index !== ( post.categories.length - 1 ) ?
										<a href={ `category/${ category.term_id }` } key={ category.term_id }>{ category.name }, </a>
										:
										<a href={ `category/${ category.term_id }` } key={ category.term_id }>{ category.name }</a>
								);
							} )
						}
					</div>
				) : '' }
			</div>
		</div>
	)
};
