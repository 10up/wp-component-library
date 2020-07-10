import ReadingPosition from '@10up/reading-position';

 new ReadingPosition( '.reading-position', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	scrollStart: function( percentage ) {
		console.log( 'scrollStart callback', percentage );
	},
	scrollEnd: function( percentage ) {
		console.log( 'scrollEnd callback', percentage );
	},
	scrolling: function( percentage ) {
		console.log( 'scrolling callback', percentage );
	}
 } );
