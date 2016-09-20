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


	};

} )();
