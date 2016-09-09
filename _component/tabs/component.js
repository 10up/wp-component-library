;(function (w, doc) {

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
	var TenUp_Tabs = {};

	/*
		Cross-browser way to deal with class management
	*/

	TenUp_Tabs.hasClass = function ( el, cls ) {
		return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test( el.className );
	};

	/*
		Cross-browser way to add a class
	*/

	TenUp_Tabs.addClass = function ( el, cls ) {
	    if ( el.classList ) {
	      el.classList.add(cls);
	    } else if (!TenUp_Tabs.hasClass(el, cls)) {
		  el.className += " " + cls;
		}
	};

	/*
		Cross-browser way to remove a class
	*/

	TenUp_Tabs.removeClass = function ( el, cls ) {
		if ( el.classList ) {
		  el.classList.remove( cls );
		} else if( TenUp_Tabs.hasClass( el, cls ) ) {
		  var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
		  el.className = el.className.replace( reg, ' ' );
		}
	};

	/*
		Start Component
	*/

    var tabs = doc.querySelectorAll( '.tabs' );

    var forEach = function ( array, callback, scope ) {
      for ( var i = 0; i < array.length; i++ ) {
        callback.call( scope, i, array[i] ); // passes back stuff we need
      }
    };

    forEach( tabs, function( index, value ) {
      var tabContent   = tabs[index].querySelectorAll( '.tab-content' ),
          tabsList     = tabs[index].querySelectorAll( '.tab-list' ),
          tabLinks     = tabs[index].querySelectorAll( '.tab-list li > a' ),
          activeTab    = tabs[index].querySelectorAll( '.tab-list li' );

      // Set state for the first .tab-content item
      tabContent[0].setAttribute( 'aria-hidden', 'false' );
      TenUp_Tabs.addClass( tabContent[0], 'is-active' );

      // Set state for the first .tab-item
      var firstTab = tabs[index].querySelectorAll( '.tab-item' );
      TenUp_Tabs.addClass( firstTab[0], 'is-active' );

      forEach( tabLinks, function( index, value ) {
        var tab = value;
        var tabId = 'tab-' + tab.getAttribute( 'href' ).slice( 1 );

        // Set ARIA and ID attributes
        tab.setAttribute( 'id', tabId );
        tab.setAttribute( 'aria-selected', false );
        tab.parentNode.setAttribute( 'role', 'presentation' );
        tabContent[index].setAttribute( 'aria-labelledby', tabId );
        tabContent[index].setAttribute( 'aria-hidden', true );

        tab.onclick = tabHandle;

        function tabHandle( event ) {
          event.preventDefault();

          // Handle opening and closing of the tabs on mobile devices
          if ( TenUp_Tabs.hasClass( tab.parentNode, 'is-active' ) ) {

	        if ( TenUp_Tabs.hasClass( tab.parentNode.parentNode, 'm-is-active' ) ) {
		      TenUp_Tabs.removeClass( tab.parentNode.parentNode, 'm-is-active' );
	        } else {
		      TenUp_Tabs.addClass( tab.parentNode.parentNode, 'm-is-active' );
	        }

          } else {
            TenUp_Tabs.removeClass( tab.parentNode.parentNode, 'm-is-active' );
          }

          // Change state of previously selected activeTab item
          forEach( activeTab, function( index, value ) {

	        if ( TenUp_Tabs.hasClass( value, 'is-active' ) ) {
              TenUp_Tabs.removeClass( value, 'is-active' );
              tabLinks[index].setAttribute( 'aria-selected', 'false' );
            }

          });

          // Set state of newly selected tab list item
          tab.setAttribute( 'aria-selected', 'true' );
          TenUp_Tabs.addClass( tab.parentNode, 'is-active' );

          // Change state of previously selected tabContent item
          forEach( tabContent, function( index, value ) {
	        if ( TenUp_Tabs.hasClass( value, 'is-active' ) ) {
              TenUp_Tabs.removeClass( value, 'is-active' );
              tabContent[index].setAttribute( 'aria-hidden', 'true' );
            }
          });

          // Show newly selected content
          TenUp_Tabs.addClass( tabContent[index], 'is-active' );
          tabContent[index].setAttribute( 'aria-hidden', 'false' );

          // Set focus to the first heading in the newly revealed tab content
          tabContent[index].querySelector( 'h2' ).setAttribute( 'tabindex', -1 );
          tabContent[index].querySelector( 'h2' ).focus();

        }
      });
    });

} )( this, this.document );
