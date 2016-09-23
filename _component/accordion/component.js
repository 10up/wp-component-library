( function() {
	'use strict';

	var accordion = document.getElementsByClassName( 'accordion' );

	var forEach = function( array, callback, scope ) {
		for ( var i = 0; i < array.length; i++ ) {
			callback.call( scope, i, array[i] ); // passes back stuff we need
		}
	};

	// Loop through each accordion
	forEach( accordion, function( index, value ) {
		var accordionContent = accordion[index].getElementsByClassName( 'accordion-content' ),
			accordionHeader  = accordion[index].getElementsByClassName( 'accordion-header' ),
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

			head.addEventListener( 'click', accordionHandle );

			function accordionHandle() {

				var nextPanel = value.nextElementSibling,
				nextPanelLabel = nextPanel.getElementsByClassName( 'accordion-label' )[0];

				value.classList.toggle( 'is-active' );

				nextPanel.classList.toggle( 'is-active' );

				nextPanelLabel.setAttribute( 'tabindex', -1 );
				nextPanelLabel.focus();

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
