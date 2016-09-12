/**
 * Name: Accessible ToolTips
 * Contributors: Tim Wright (tim@10up.com, @csskarma)
 * License: MIT, https://opensource.org/licenses/MIT
 * Converted from a jQuery plugin originally written by @scottohara: https://github.com/scottaohara/accessible-components
 */

;(function ( w, doc ) {

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

	var a11yTT = {};

	/*
	 * Cross-browser way to deal with class management
	 */

	a11yTT.hasClass = function ( el, cls ) {
		return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test( el.className );
	};

	/*
	 * Cross-browser way to add a class
	 */

	a11yTT.addClass = function ( el, cls ) {
		if ( el.classList ) {
	  		el.classList.add(cls);
		} else if (!TenUp_Menu_Off_Canvas.hasClass(el, cls)) {
			el.className += " " + cls;
		}
	};

	/*
	 * Cross-browser way to remove a class
	 */

	a11yTT.removeClass = function ( el, cls ) {
		if ( el.classList ) {
			el.classList.remove( cls );
		} else if( a11yTT.hasClass( el, cls ) ) {
			var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
			el.className = el.className.replace( reg, ' ' );
		}
	};

	/*
	 * Trim whitespace
	 */

	a11yTT.trim = function( string ) {
		return string.replace(/^\s+|\s+$/g,'');
	};


	/*
	 * Start Component
	 */

	a11yTT.init = function () {

		// Caching and setting up some variables
		var ttContainer           = doc.querySelectorAll('.a11y-tip');
		var ttContainerCount      = ttContainer.length;
		var ttToggleClass         = 'a11y-tip--toggle';
		var ttToggle              = '.' + ttToggleClass;
		var ttTriggerClass        = 'a11y-tip__trigger';
		var ttTriggerToggleClass  = 'a11y-tip__trigger--toggle';
		var ttTrigger             = '.' + ttTriggerClass;
		var ttTheTip              = '.a11y-tip__help';
		var i;
		var newButton
		var originalTrigger;
		var getTipId

		var setup = function ( obj ) {

			// this will be needed for any components that don't have an ID set
			var count = 1;
			var self = obj;
			var trigger = self.querySelector( ttTrigger );
			var tip = self.querySelector( ttTheTip );


			// if a trigger is not an inherently focusable element, it'll need a
			// tabindex. But if it can be inherently focused, then don't set a tabindex
			if ( trigger.nodeName !== 'A' && trigger.nodeName !== 'BUTTON' && trigger.nodeName !== 'INPUT' && trigger.nodeName !== 'TEXTAREA' && trigger.nodeName !== 'SELECT' ) {
				trigger.setAttribute('tabindex', '0');
			}

			// if a tip doesn't have an ID, then we need to generate one
			if ( !tip.getAttribute('id') ) {
				tip.setAttribute( 'id', 'tool_tip_' + count );
			}

			// if a trigger doesn't have an aria-described by, then we need
			// to point it to the tip's ID
			if ( !trigger.getAttribute( 'aria-describedby' ) ) {
				trigger.setAttribute( 'aria-describedby', tip.getAttribute( 'id' ) );
			}

			// if the element after a tooltip trigger does not have
			// the role of tooltip set, then set it.
			if ( !tip.getAttribute('role') ) {
				tip.setAttribute( 'role', 'tooltip' );
			}

			// if a tip container has ttToggleClass,
			// we need to make sure the trigger is a button
			if ( a11yTT.hasClass( self, ttToggleClass ) ) {

				originalTrigger = self.querySelector( ttTrigger ).innerHTML;
				originalTrigger = a11yTT.trim( originalTrigger );
				getTipId = self.querySelector( ttTheTip ).getAttribute( 'id' );
				newButton = doc.createElement( 'button' );

				newButton.setAttribute( 'type', 'button' );
				a11yTT.addClass( newButton, ttTriggerClass);
				a11yTT.addClass( newButton, ttTriggerToggleClass);
				newButton.setAttribute('aria-describedby', getTipId);
				newButton.setAttribute('aria-expanded', 'false');
				newButton.textContent = originalTrigger;

				self.removeChild( self.querySelector( ttTrigger ) );
				self.insertBefore( newButton, self.firstChild );

				newButton.addEventListener( 'click', function ( e ) {

					if ( this.getAttribute( 'aria-expanded' ) === 'true' ) {
						this.setAttribute( 'aria-expanded', 'false' );
					} else if ( this.getAttribute( 'aria-expanded' ) === 'false' ) {
						this.setAttribute( 'aria-expanded', 'true' );
					}

				}, false);

			} // if self contains the toggleClass

		  	// hide the tooltip on blur of the trigger
			trigger.addEventListener( "blur", function( e ) {
				var parent = this.parentNode;

				if( a11yTT.hasClass( parent, 'a11y-tip--hide') ) {
			  		a11yTT.removeClass( parent, 'a11y-tip--hide');
				}
			}, false );

			// hide the tooltip on ESC because we have empathy and sometimes
			// you just don't want a tool tip all up in your face, right?
			// if a keyboard user doesn't want/need the tooltip anymore
			// allow them to hide it by pressing the ESC key.
			// once they move focus away from the element that had the
			// the tooltip, remove the hide-tip class so that the
			// tip can be accessed again on re-focus.
		  	trigger.addEventListener( 'keyup', function ( e ) {

				if ( e.which == 27 ) {
					e.preventDefault();
					a11yTT.addClass( this, 'a11y-tip--hide' )
					return false;
				}

			}, false);

			// end the loop, increase count by 1
			return count = count + 1;

		} // setup()

		// Call setup()
		for ( i = 0; i < ttContainerCount; i = i + 1 ) {
			setup( ttContainer[i] );
		}

	}; // end a11yTT.init


	// Get these Tooltips going!
	a11yTT.init();

})( this, this.document );
