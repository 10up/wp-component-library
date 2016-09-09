;( function ( w, doc ) {

	// Polyfill for el.matches
	if (!Element.prototype.matches) {
		Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function(s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) {}
			return i > -1;
		};
	}

	// Enable strict mode
	'use strict';

	// Local object for method references
	var TenUp_Accordion = {};

	/*
	Cross-browser way to deal with class management
	*/

	TenUp_Accordion.hasClass = function ( el, cls ) {
		return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test( el.className );
	};

	/*
	Cross-browser way to add a class
	*/

	TenUp_Accordion.addClass = function ( el, cls ) {
		if ( el.classList ) {
			el.classList.add(cls);
		} else if (!TenUp_Accordion.hasClass(el, cls)) {
			el.className += " " + cls;
		}
	};

  /*
	Cross-browser way to remove a class
  */

	TenUp_Accordion.removeClass = function ( el, cls ) {
		if ( el.classList ) {
			el.classList.remove( cls );
		} else if( TenUp_Accordion.hasClass( el, cls ) ) {
			var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
			el.className = el.className.replace( reg, ' ' );
		}
	};

	/*
	  Start Component
	*/

	var accordion = document.querySelectorAll( '.accordion' );
	var forEach = function ( array, callback, scope ) {
		for ( var i = 0; i < array.length; i++ ) {
			callback.call( scope, i, array[i] ); // passes back stuff we need
		}
	};

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

				if( TenUp_Accordion.hasClass( value, 'is-active' ) ) {
					TenUp_Accordion.removeClass( value, 'is-active' );
				} else {
					TenUp_Accordion.addClass( value, 'is-active' );
				}

				if( TenUp_Accordion.hasClass( nextPanel, 'is-active' ) ) {
					TenUp_Accordion.removeClass( nextPanel, 'is-active' );
				} else {
					TenUp_Accordion.addClass( nextPanel, 'is-active' );
				}

				nextPanel.querySelector( '.accordion-label' ).setAttribute( 'tabindex', -1 );
				nextPanel.querySelector( '.accordion-label' ).focus();

				if( !TenUp_Accordion.hasClass( nextPanel, 'visually-hidden' ) ) {

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
} )( this, this.document );
