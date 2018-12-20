import accordion from '@10up/component-accordion';

accordion( '.accordion', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onOpen: function() {
		console.log( 'onOpen callback' );
	},
	onClose: function() {
		console.log( 'onClose callback' );
	},
	onToggle: function() {
		console.log( 'onToggle callback' );
	}
} );
