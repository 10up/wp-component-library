import tabs from '@10up/component-tabs';

tabs( '.tabs', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onTabChange: function() {
		console.log( 'onTabChange callback' );
	}
} );
