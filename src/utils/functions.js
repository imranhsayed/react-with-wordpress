import DOMPurify from 'dompurify';

/**
 * Create pagination array.
 *
 * Example: [1, "...", 521, 522, 523, 524, 525, "...", 529]
 *
 * @param {int} currentPage Current page no.
 * @param {int} totalPages Count of total no of pages.
 * @return {Array} Array containing the indexes to be looped through to create pagination
 */
export const createPaginationArray = ( currentPage, totalPages ) => {

	let loopableArray   = [];
	let countOfDotItems = 0;

	// If there is only one page, return an empty array.
	if ( 1 === totalPages ) {
		return loopableArray;
	}

	/**
	 * Push the two index items before the current page.
	 */
	if ( 0 < currentPage - 2 ) {
		loopableArray.push( currentPage - 2 );
	}

	if ( 0 < currentPage - 1 ) {
		loopableArray.push( currentPage - 1 );
	}

	// Push the current page index item.
	loopableArray.push( currentPage );

	/**
	 * Push the two index items after the current page.
	 */
	if ( totalPages >= currentPage + 1 ) {
		loopableArray.push( currentPage + 1 );
	}

	if ( totalPages >= currentPage + 2 ) {
		loopableArray.push( currentPage + 2 );
	}

	/**
	 * Push the '...' at the beginning of the array
	 * only if the difference of between the 1st and 2nd index item is greater than 1.
	 */
	if ( 1 < loopableArray[ 0 ] - 1 ) {
		loopableArray.unshift( '...' );
		countOfDotItems += 1;
	}

	/**
	 * Push the '...' at the end of the array.
	 * only if the difference of between the last and 2nd last item is greater than 1.
	 * We remove the count of dot items from the array to get the actual indexes, while checking the condition.
	 */
	if (
		1 <
		totalPages - loopableArray[ loopableArray.length - ( 2 - countOfDotItems ) ]
	) {
		loopableArray.push( '...' );
	}

	// Push first index item in the array if it does not already exists.
	if ( -1 === loopableArray.indexOf( 1 ) ) {
		loopableArray.unshift( 1 );
	}

	// Push last index item in the array if it does not already exists.
	if ( -1 === loopableArray.indexOf( totalPages ) ) {
		loopableArray.push( totalPages );
	}

	return loopableArray;
};

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
	return process.browser ? DOMPurify.sanitize(content) : content
}
