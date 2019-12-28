import React from 'react';

const FeaturedImage = ( props ) => {

	const { img_sizes, img_src, img_srcset }  = props.image;

	return (
		<img width={ img_src[1] } height={ img_src[2] }
		     src={ img_src[0] }
		     className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""
		     srcSet={ img_srcset ? img_srcset : '' }
		     sizes={ img_sizes }
		/>
	)
};

export default FeaturedImage;
