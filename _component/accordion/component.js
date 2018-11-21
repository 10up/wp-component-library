/********************************

	Name: WordPress Accessible Accordion
	Usage:

	TenUp.accordion( {
		target: '.accordion', // ID (or class) of accordion container
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

	// This is our global accordion index to keep unique ids
	var topIndex = 0;

	window.TenUp.accordion = function( options, callback ) {
		if ( 'undefined' === typeof options.target ) {
			return false;
		}

		var accordions = document.querySelectorAll( options.target );

		if ( ! accordions.length ) {
			return;
		}

		// Simple iterator for reuse
		var forEach = function( array, callback, scope ) {
			for ( var i = 0, imax = array.length; i < imax; i++ ) {
				callback.call( scope, i, array[i] ); // passes back stuff we need
			}
		};

		forEach( accordions, function( accordionsIndex, accordion ) {
			var accordionContent = accordion.getElementsByClassName( 'accordion-content' ),
				accordionHeader  = accordion.getElementsByClassName( 'accordion-header' );

			topIndex++;

			forEach( accordionHeader, function( index, value ) {
				var head  = value,
					index = index + 1;

				// Set ARIA and ID attributes
				head.setAttribute( 'id', 'tab' + topIndex + '-' + index );
				head.setAttribute( 'aria-selected', 'false' );
				head.setAttribute( 'aria-expanded', 'false' );
				head.setAttribute( 'aria-controls', 'panel' + topIndex + '-' + index );
				head.setAttribute( 'role', 'tab' );

				head.addEventListener( 'click', accordionHandle );

				function accordionHandle() {

					var nextPanel = value.nextElementSibling,
					nextPanelLabel = nextPanel.getElementsByClassName( 'accordion-label' )[0];

					value.classList.toggle( 'is-active' );

					nextPanel.classList.toggle( 'is-active' );

					if ( nextPanelLabel ) {
						nextPanelLabel.setAttribute( 'tabindex', -1 );
						nextPanelLabel.focus();
					}

					if ( nextPanel.classList.contains( 'is-active' ) ) {

						head.setAttribute( 'aria-selected', 'true' );
						head.setAttribute( 'aria-expanded', 'true' );
						nextPanel.setAttribute( 'aria-hidden', 'false' );

					} else {

						head.setAttribute( 'aria-selected', 'false' );
						head.setAttribute( 'aria-expanded', 'false' );
						nextPanel.setAttribute( 'aria-hidden', 'true' );

					}
				}
			} );

			forEach( accordionContent, function( index, value ) {
				var content = value,
					index   = index + 1;

				// Set ARIA and ID attributes
				content.setAttribute( 'id', 'panel' + topIndex + '-' + index );
				content.setAttribute( 'aria-hidden', 'true' );
				content.setAttribute( 'aria-labelledby', 'tab' + topIndex + '-' + index );
				content.setAttribute( 'role', 'tabpanel' );
				//content.setAttribute( 'tabindex', '-1' );
			} );

			// Execute the callback function
			if ( typeof callback === 'function' ) {
				callback.call();
			}
		} );
	};

} )();
