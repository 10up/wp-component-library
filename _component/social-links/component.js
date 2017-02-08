/********************************

	Name: WordPress Accessible Responsive Navigation Menu
	Usage:

	TenUp.socialLinks( {
		'target'            : '.social-links',
		'window_height' : 450,
		'window_width'  : 625
	}, function() {
		console.log( 'Amazing callback function!' );
	} );

********************************/

( function() {

	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.TenUp ) {
		window.TenUp = {};
	}


	// Start defining methods here
	TenUp.socialLinks = function( options, callback ) {

		// Default variables
		var defaults = {
			'target'            : '.social-links',
			'window_height' : 450,
			'window_width'  : 625
		}
		var defaults_count = defaults.length;
		var el;

		if ( options.target ) {
			el = document.querySelectorAll( options.target );
		} else {
			el = document.querySelectorAll( defaults.target );
		}

		// If there's no element to target, bail
		if( !el || el.length === 0 ) {
			return;
		}

		var el_count = el.length;
		var obj;
		var i;
		var j;

		// Loop through all options
		for ( i = 0; i < defaults_count; i = i + 1 ) {

			// Map all default settings to user defined options
			if ( typeof options[i] === "undefined" ) {
				options[i] = defaults[i];
			}

		}


		// Loop through all the potential menus on the page (there may be more than one)
		for ( j = 0; j < el_count; j = j + 1 ) {

			obj = el[j];
			obj.addEventListener( 'click', function( event ) {
				listenerClick( options, event );
			} );

		}

		// Accept a callback function
		if ( typeof callback === 'function' ) {
			callback.call( this );
		}

	}; // build_links

	function listenerClick( options, event ) {
		// Stop links from firing
		event.preventDefault();

		// Stop events from bubbling up the DOM
		event.stopPropagation();

		var currentTarget = event.currentTarget;
		var target = event.target;
		var location = target.getAttribute('href');
		var random_number = Math.random() * (9999 - 1) + 1;
		var social_window;

		// if you're clicking something that isn't a link, try the parent
		if( !location ) {
			location = target.parentNode.getAttribute('href');
		}

		// If still no location set, bail out
		if( !location ) { return; }

		// if the target OR its parent is a link, run it.
		if( target.nodeName === 'A' || target.parentNode.nodeName === 'A') {

			// Open the window
			social_window = window.open( location, 'share-window-' + random_number, 'width='+ options.window_width + ',height=' +  options.window_height +'menubar=no,location=no,resizable=no,scrollbars=no,status=no' );

			// Reset the opener
			social_window.opener = null;
		}

	};
} )();
