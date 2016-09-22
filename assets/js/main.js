;(function ( w, doc ) {

	// Enable strict mode
	"use strict";

	// Local object for method references
	var App = {};

	// Namespace
	App.ns = "10up Component Library";

	// Start defining methods here
	App.init = function() {

	  // Add the UI buttons
	  // Only run on desktop
	  if ( window.innerWidth > 767 ) {
	  	App.add_rwd_buttons();
	  }

	  // Add the tabs, if necessary
	  App.tabs();

	};

  	// UI Buttons
	App.add_rwd_buttons = function() {

		// Caching and initializing some variables
		var components = doc.querySelectorAll('.component');
		var components_count = components.length;
		var component;
		var wrapper;
		var iframe;
		var button_sm;
		var button_md;
		var button_lrg;
		var button_reset;
		var menu;
		var i;

		// Are there components on this page?
		if( components_count ) {

		  	// Loop through all the components (there's probably just one, but better safe than sorry, right?)
		  	for ( i = 0; i < components_count; i = i + 1 ) {

		  		// Get the elements we need to work with
			  	component = components[i];
			  	iframe = component.querySelector( 'iframe' );

			  	// Create the wrapper
			  	wrapper = doc.createElement( 'div' );
			  	wrapper.setAttribute( 'class', 'wrapper-iframe' );
			  	wrapper.setAttribute( 'aria-hidden', 'true' );

			  	// Create the menu container
			  	menu = doc.createElement( 'div' );
			  	menu.setAttribute( 'class', 'menu-rwd' );

			  	// Create a button
			  	button_sm = doc.createElement( 'button' );
			  	button_md = doc.createElement( 'button' );
			  	button_lrg = doc.createElement( 'button' );
			  	button_reset = doc.createElement( 'button' );

			  	// Make it a real button
			  	button_sm.setAttribute( 'type', 'button' );
			  	button_md.setAttribute( 'type', 'button' );
			  	button_lrg.setAttribute( 'type', 'button' );
			  	button_reset.setAttribute( 'type', 'button' );

			  	// Store on data
			  	button_sm.setAttribute( 'data-width', 'small' );
			  	button_md.setAttribute( 'data-width', 'medium' );
			  	button_lrg.setAttribute( 'data-width', 'large' );
			  	button_reset.setAttribute( 'data-width', 'reset' );

			  	// Set the text
			  	button_sm.innerHTML = "Small";
			  	button_md.innerHTML = "Medium";
			  	button_lrg.innerHTML = "Large";
			  	button_reset.innerHTML = "Reset";

			  	// Add them to the menu
			  	menu.appendChild( button_sm );
			  	menu.appendChild( button_md );
			  	menu.appendChild( button_lrg );
			  	menu.appendChild( button_reset );

			  	// Insert the menu into the wrapping element
			  	wrapper.appendChild( menu );

			  	// Build the UI
			  	component.insertBefore( wrapper, iframe.nextSibling );

			  	// Listeners
			  	App.bind_all_events( button_sm, button_md, button_lrg, button_reset, iframe );

		  	} // for

		} // if

	}; // add_rwd_buttons

	App.bind_all_events = function( button_sm, button_md, button_lrg, button_reset, iframe ) {

		var btn;

		button_sm.addEventListener( 'click', function() {
			btn = this;
			App.resize_iframe( btn, iframe );
		}, false );

		button_md.addEventListener( 'click', function() {
			btn = this;
			App.resize_iframe( btn, iframe );
		}, false );

		button_lrg.addEventListener( 'click', function() {
			btn = this;
			App.resize_iframe( btn, iframe );
		}, false );

		button_reset.addEventListener( 'click', function() {
			btn = this;
			App.resize_iframe( btn, iframe );
		}, false );

	};

	App.resize_iframe = function( btn, iframe ) {

		var width = btn.getAttribute('data-width');
		var width_class = 'w-iframe__' + width;

		// Remove all the potential classes so we don't need to check
		iframe.classList.remove( 'w-iframe__small' );
		iframe.classList.remove( 'w-iframe__medium' );
		iframe.classList.remove( 'w-iframe__large' );

		// Add the correct one back on
		if( width !== 'reset' ) {
			iframe.classList.add( width_class );
		}

	};

	App.tabs = function() {
		// Bail out if you're not on a component page
		if ( ! document.getElementsByTagName( 'body' )[0].classList.contains( 'page-component' ) ) {
			return;
		}

		var tabList = document.querySelectorAll( '.code-tab-list a' );

		for ( var i = 0; i < tabList.length; i++ ) {
			tabList[i].addEventListener( 'click', function(e) {
				e.preventDefault();

				var templated     = document.getElementById( 'templated' ),
					templatedLink = document.getElementById( 'js-templated-link' ),
					text          = document.getElementById( 'text' ),
					textLink      = document.getElementById( 'js-text-link' );

				if ( '#text' === this.getAttribute( 'href' ) ) {
					text.classList.add( 'show' );
					textLink.classList.add( 'show' );

					templated.classList.remove( 'show' );
					templatedLink.classList.remove( 'show' );
				} else {
					templated.classList.add( 'show' );
					templatedLink.classList.add( 'show' );

					text.classList.remove( 'show' );
					textLink.classList.remove( 'show' );
				}
			});
		}
	}

    // Start the application
    App.init();

} )( this, this.document );
