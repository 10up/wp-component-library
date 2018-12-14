import navigation from '@10up/component-navigation';

navigation( '.navigation', {
	action: 'click',
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onOpen: function() {
		console.log( 'onOpen callback' );
	},
	onClose: function() {
		console.log( 'onClose callback' );
	},
	onSubmenuOpen: function() {
		console.log( 'onSubmenuOpen callback' );
	},
	onSubmenuClose: function() {
		console.log( 'onSubmenuClose callback' );
	}
} );
