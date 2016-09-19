( function() {
	'use strict';

	/*
	 * Start Component
	 */

	var menu = document.querySelector( '.primary-menu' );

	if ( ! menu ) {
		// No menu found
		return;
	}

	var subMenuItem = menu.querySelectorAll( '.sub-menu .menu-item' ),
		subMenu = menu.querySelectorAll( '.sub-menu' ),
		menuToggle = document.querySelector( '.site-menu-toggle' );

	menuToggle.onclick = function() {

		menu.classList.toggle( 'is-active' );

		// Update the menu state within the button
		if( this.getAttribute( 'aria-expanded') === 'false' ) {
			this.setAttribute( 'aria-expanded', 'true' );
		} else {
			this.setAttribute( 'aria-expanded', 'false' );
		}

		// Set focus to the first item in the menu
		menu.querySelectorAll( 'a' )[0].focus();
	};

} )();
