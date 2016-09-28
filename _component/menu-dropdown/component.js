/********************************
	TO DO:
		- Large Screen on focus & click... only 1 menu should be open at a time
********************************/

( function() {

	'use strict';

	/*
		Cache and define some variables
	*/

	var menu = document.getElementById( 'menu-main-nav' );
	var menu_id = menu.getAttribute( 'id' );
	var menu_toggle = document.getElementById( 'js-menu-toggle' );
	var menu_toggle_href = menu_toggle.getAttribute( 'href' );
	var aria_controls = menu_toggle.getAttribute('aria-controls');
	var menu_toggle_target = menu_toggle_href.split('#')[1];
	var sub_menu_acion = menu_toggle.getAttribute( 'data-submenu' );
	var menu_items_with_children = menu.querySelectorAll('.menu-item-has-children');
	var menu_items_with_children_count = menu_items_with_children.length;
	var currentTarget;
	var target;
	var i;

	/*
		Helper functions
	*/

	// Get screen size from getComputedStyle (so we don't have to define each breakpoint twice)
	var get_screen_size = function( sizeString ) {

		var size = window.getComputedStyle( document.body,':before' ).getPropertyValue( 'content' );

		if( size && size.indexOf( sizeString ) !==-1 ) {
			return true;
		}

	};

	// Debounce
	var debounce = function( func, wait, immediate ) {

		var timeout;
		return function() {
			var context = this, args = arguments;

			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};

			var callNow = immediate && !timeout;

			clearTimeout( timeout );
			timeout = setTimeout( later, wait );
			if (callNow) func.apply(context, args);
		};

	};

	// Listener for the menu open/close action
	var listener_menu = function( e ) {

		e.preventDefault();

		if( document.body.classList.contains('menu-is-open') ) {

			// Close the menu
			menu.setAttribute('aria-hidden', 'true');
			menu_toggle.setAttribute('aria-expanded', 'false');

			// Bubble to the document
			document.body.classList.remove('menu-is-open');

		} else {

			// Open the menu
			menu.setAttribute('aria-hidden', 'false');
			menu_toggle.setAttribute('aria-expanded', 'true');

			// Set focus to the first link
			menu.querySelectorAll('a')[0].focus();

			// Bubble to the document
			document.body.classList.add('menu-is-open');

		}

	}; // listener_menu()

	// Listener for submenu on click
	var listener_submenu_click = function( e ) {

		currentTarget = e.currentTarget;
		target = e.target;

		if( target.getAttribute('aria-haspopup') ) {

			e.preventDefault();
			e.stopPropagation();

			var parent_menu = target.parentNode;
			var sub_menu = parent_menu.querySelector('.sub-menu');
			var all_open_menus = menu.querySelectorAll('.child-has-focus');
			var all_open_menu_triggers = menu.querySelectorAll( '.child-has-focus > a.submenu-is-open' );
			var all_open_menus_count = all_open_menus.length;
			var all_open_menu_triggers_count = all_open_menu_triggers.length;
			var t;

			if( get_screen_size( 'medium' ) || get_screen_size( 'large' ) ) {
				if( sub_menu_acion === 'click' && all_open_menus_count > 0 ) {

					console.log('make sure only 1 menu item can be opened at a time');

				}
			}

			if( e.srcElement.nodeName === 'A' && target.classList.contains( 'submenu-is-open' ) ) {

				//  close it
				sub_menu.setAttribute( 'aria-hidden', 'true' );
				parent_menu.classList.remove( 'child-has-focus' );
				target.classList.remove( 'submenu-is-open' );

			} else {

				// open it
				sub_menu.setAttribute( 'aria-hidden', 'false' );
				parent_menu.classList.add( 'child-has-focus' );
				target.classList.add( 'submenu-is-open' );
				sub_menu.querySelectorAll('a')[0].focus();

			}
		}

	}; // listener_submenu_click()

	// When "hover", this is how focus should act
	var listener_submenu_focus = function( e ) {

		var currentTarget = e.currentTarget;
		var target = e.target;
		var parent_menu = target.parentNode;
		var sub_menu = currentTarget.querySelector('.sub-menu');

		sub_menu.setAttribute( 'aria-hidden', 'false' );
		parent_menu.classList.add( 'child-has-focus' );
		target.classList.add( 'submenu-is-open' );

	};

	// Listener for the window resize
	var listener_window = debounce( function( e ) {

		if( get_screen_size( 'small' ) ) {

			menu_create();

		} else {

			menu_destroy();

		}

	}, 100 );

	// Close the menu if you click somewhere else
	var listener_close_open_menus = function( e ) {

		var open_menus = menu.querySelectorAll('.submenu-is-open');
		var open_menus_count = open_menus.length;
		var opn;

		// if the event is keyup and it was the ESC key
		if( e.type === 'keyup' && e.keyCode == 27 ) {

			if ( open_menus_count ) {

				// Loop through all the open menus and close them
				for ( opn = 0; opn < open_menus.length; opn = opn + 1 ) {

					menu_sub_close( open_menus[opn] );

				} // for

				// return focus to the first open menu
				if( sub_menu_acion === 'click' ) {
					open_menus[0].focus();
				}

			} // if

		// If the event was a mouseup
		} else if( e.type === 'mouseup' ) {

			if ( !menu.contains( e.target ) && menu.querySelector('.submenu-is-open') ) {

				if ( open_menus_count ) {

					for ( opn = 0; opn < open_menus.length; opn = opn + 1 ) {

						menu_sub_close( open_menus[opn] );

					} // for

				}

			} // if

		}

	}; // listener_close_open_menus()

	var menu_sub_close = function( open_item ) {

		open_item.classList.remove('submenu-is-open');
		open_item.parentNode.classList.remove('child-has-focus');

		if( open_item.parentNode.querySelector('.sub-menu') ) {
			open_item.parentNode.querySelector('.sub-menu').setAttribute( 'aria-hidden', 'true');
		}

	};

	// Method to create the small screen menu
	var menu_create = function() {

		if( !document.body.classList.contains( 'menu-created' ) ) {

			if( !document.body.classList.contains( 'menu-is-open' ) ) {
				menu.setAttribute( 'aria-hidden', 'true' );
				menu_toggle.setAttribute( 'aria-expanded', 'false' );
			} else {
				menu.setAttribute( 'aria-hidden', 'false' );
				menu_toggle.setAttribute( 'aria-expanded', 'true' );
			}

			// Loop through all submenus and bind events when needed
			for ( i = 0; i < menu_items_with_children_count; i = i + 1 ) {

				if( sub_menu_acion !== 'click' ) {
					menu_items_with_children[i].addEventListener( 'click', listener_submenu_click );
					menu.classList.add('uses-click');
				}

			} // for

			// Bind the event
			menu_toggle.addEventListener( 'click', listener_menu );

			// Add the body class to prevent this from running again
			document.body.classList.add( 'menu-created' );
			document.body.classList.remove( 'menu-destroyed' );

		}

	};

	// Method to destroy the small screen menu
	var menu_destroy = function() {

		var tmp_open
		var tmp_open_count
		var t;

		if( !document.body.classList.contains( 'menu-destoryed' ) ) {

			// Remove aria-hidden, because we don't need it.
			menu.removeAttribute( 'aria-hidden' );

			// Loop through all submenus and bind events when needed
			for ( i = 0; i < menu_items_with_children_count; i = i + 1 ) {
				if( sub_menu_acion !== 'click' ) {
					menu_items_with_children[i].removeEventListener( 'click', listener_submenu_click );
					menu.classList.remove('uses-click');
				}
			}

			// if we're not using click, the open menus need to be reset
			if( sub_menu_acion !== 'click' ) {

				tmp_open = document.querySelectorAll('.child-has-focus');
				tmp_open_count = tmp_open.length;

				for ( t = 0; t < tmp_open_count; t = t + 1 ) {
					tmp_open[t].classList.remove( 'child-has-focus' );
					tmp_open[t].querySelector('.submenu-is-open').classList.remove('submenu-is-open');
					tmp_open[t].querySelector('.sub-menu').setAttribute( 'aria-hidden', 'true');
				}

			}

			// Unbind the event
			menu_toggle.removeEventListener( 'click', listener_menu );

			// Add the body class to prevent this from running again
			document.body.classList.add( 'menu-destroyed' );
			document.body.classList.remove( 'menu-created' );

		}

	};

	// Check init menu state
	if( get_screen_size( 'small' ) ) {
		menu_create();
	}

	// If aria-controls isn't set, set it
	if( !aria_controls ) {
		menu_toggle.setAttribute( 'aria-controls', menu_id );
	}

	// If the menu ID and toggle href don't match, make them match (this seems to happen often to merit this check)
	if( menu_toggle_target !== menu_id ) {
		menu_toggle.setAttribute( 'href', '#' + menu_id );
	}

	/*
		Events
	*/

	// Debounced resize event to create and destroy the small screen menu options
	window.addEventListener( 'resize', listener_window );

	// Close the submenus by clicking off of them or hitting ESC
	document.addEventListener('mouseup', listener_close_open_menus );
	document.addEventListener('keyup', listener_close_open_menus );

	/*
		Hiding and showing submenus (click, focus, hover)
	*/

	// Loop through all items with sub menus and bind focus to them for tabbing
	for ( i = 0; i < menu_items_with_children_count; i = i + 1 ) {

		// Let a screen reader know this menu has a submenu by hooking into the first link
		menu_items_with_children[i].querySelector('a').setAttribute( 'aria-haspopup', 'true' );

		// Hide and label each sub menu
		menu_items_with_children[i].querySelector('.sub-menu').setAttribute( 'aria-hidden', 'true' );
		menu_items_with_children[i].querySelector('.sub-menu').setAttribute( 'aria-label', 'Submenu' );

		// If the screen is small or the action is set to click
		if( get_screen_size( 'small' ) || sub_menu_acion === 'click' ) {

			menu_items_with_children[i].addEventListener( 'click', listener_submenu_click );
			menu.classList.add('uses-click');

		} else if ( sub_menu_acion !== 'click' ) {

			if( get_screen_size( 'medium' ) || get_screen_size( 'large' ) ) {

				menu_items_with_children[i].addEventListener( 'focusin', listener_submenu_focus );

			}

		}

	} // for()

} )();
