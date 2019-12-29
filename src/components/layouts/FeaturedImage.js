import React from 'react';

const FeaturedImage = ( props ) => {

	const { img_sizes, img_src, img_srcset }  = props.image;
	const { title } = props.title;

	return (
		<img width={ img_src[1] } height={ img_src[2] }
		     src={ img_src[0] }
		     className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
		     srcSet={ img_srcset ? img_srcset : '' }
		     sizes={ img_sizes }
		     alt={ title }
		/>
	)
};

export default FeaturedImage;
