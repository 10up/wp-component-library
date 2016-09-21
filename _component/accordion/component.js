( function() {
	'use strict';

	var accordion = document.querySelectorAll( '.accordion' );

	var forEach = function( array, callback, scope ) {
		for ( var i = 0; i < array.length; i++ ) {
			callback.call( scope, i, array[i] ); // passes back stuff we need
		}
	};

	// Loop through each accordion
	forEach( accordion, function( index, value ) {
		var accordionContent = accordion[index].querySelectorAll( '.accordion-content' ),
			accordionHeader  = accordion[index].querySelectorAll( '.accordion-header' ),
			topIndex         = index + 1;

		forEach( accordionHeader, function( index, value ) {
			var head  = value,
				index = index + 1;

			// Set ARIA and ID attributes
			head.setAttribute( 'id', 'tab' + topIndex + '-' + index );
			head.setAttribute( 'aria-selected', 'false' );
			head.setAttribute( 'aria-expanded', 'false' );
			head.setAttribute( 'aria-controls', 'panel' + topIndex + '-' + index );
			head.setAttribute( 'role', 'tab' );

			head.onclick = accordionHandle;

			function accordionHandle() {

				var nextPanel = value.nextElementSibling;

				value.classList.toggle( 'is-active' );

				nextPanel.classList.toggle( 'is-active' );

				nextPanel.querySelector( '.accordion-label' ).setAttribute( 'tabindex', -1 );
				nextPanel.querySelector( '.accordion-label' ).focus();

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
		});

		forEach( accordionContent, function( index, value ) {
			var content = value,
				index   = index + 1;

			// Set ARIA and ID attributes
			content.setAttribute( 'id', 'panel' + topIndex + '-' + index );
			content.setAttribute( 'aria-hidden', 'true' );
			content.setAttribute( 'aria-labelledby', 'tab' + topIndex + '-' + index );
			content.setAttribute( 'role', 'tabpanel' );
			//content.setAttribute( 'tabindex', '-1' );
		});
	});
} )();
