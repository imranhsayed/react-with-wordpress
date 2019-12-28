import React from 'react';
import { Link } from '@reach/router';
import { createPaginationArray } from "../../utils/functions";

export const Pagination = ( props ) => {

	const { currentPage, totalPages, setCurrentPage } = props;

	const isThereNextPage     = currentPage < totalPages;
	const isTherePreviousPage = currentPage > 1;
	const paginationArray     = createPaginationArray( currentPage, totalPages );

	const getPageLink = ( pageNo ) => {
		return `/page/${pageNo}`;
	};

	return (
		<div className="pagination">
			{ isTherePreviousPage && <Link to={ getPageLink( currentPage - 1 ) } onClick={ () => setCurrentPage( currentPage - 1 ) } className="prev">Previous</Link> }

			{ paginationArray &&
			paginationArray.map( ( item, index ) => {
				// If item is not equal to '...' and the item value is not equal to current page.
				if ( '...' !== item && currentPage !== item  ) {

					return (
						// Page number links.
						<React.Fragment key={ `${ item }-${ index }` }>
							<Link
								to={ getPageLink( item ) }
								onClick={ () => setCurrentPage( item ) }
							>
								<span className="page-no">{ item }</span>
							</Link>
						</React.Fragment>
					);
				} else {
					return (
						// if its '...' or the current page, it should not be clickable ( should not be a link )
						<span key={ `${ item }-${ index }` }>
							<span className={ currentPage === item ? 'page-no active' : '' }>{ item }</span>
						</span>
					);
				}
			} ) }
			{ isThereNextPage && <Link to={ getPageLink( currentPage + 1 ) } onClick={ () => setCurrentPage( currentPage + 1 ) } className="next">Next</Link> }
		</div>
	)
};
