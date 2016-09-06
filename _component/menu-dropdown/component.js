;(function (w, doc) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var TenUp_Menu_Dropdown = {};

  /*
    Cross-browser way to deal with class management
  */

  TenUp_Menu_Dropdown.hasClass = function ( el, cls ) {
    if (el.classList) {
      return el.classList.contains(cls);
    } else {
      return !!el.cls.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
  };

  /*
    Cross-browser way to add a class
  */

  TenUp_Menu_Dropdown.addClass = function ( el, cls ) {
    if ( el.classList ) {
      el.classList.add( cls );
    } else if( !TenUp_Menu_Dropdown.hasClass( el, cls ) ) {
      el.cls += " " + cls;
    }
  };

  /*
    Cross-browser way to remove a class
  */

  TenUp_Menu_Dropdown.removeClass = function ( el, cls ) {
    if ( el.classList ) {
      el.classList.remove( cls );
    } else if( TenUp_Menu_Dropdown.hasClass( el, cls ) ) {
      var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
      el.cls = el.cls.replace( reg, ' ' );
    }
  };

  /*
	  Start Component
  */

  var subMenuItem = doc.querySelectorAll( '.sub-menu .menu-item' );
  var subMenu = doc.querySelectorAll( '.sub-menu' );
  var menuToggle = document.querySelector( '.site-menu-toggle' );
  var menu = doc.querySelector( '.primary-menu' );

  doc.addEventListener( 'focus', focusToggle, true );

  function focusToggle( e ) {

	if( TenUp_Menu_Dropdown.hasClass( e.target, 'menu-level-1' ) ) {
      TenUp_Menu_Dropdown.addClass( subMenu[0], 'hover' );
    } else {
      TenUp_Menu_Dropdown.removeClass( subMenu[0], 'hover' );
    }

  }

  menuToggle.onclick = function() {

	if( TenUp_Menu_Dropdown.hasClass( menu, 'is-active' ) ) {
      TenUp_Menu_Dropdown.removeClass( menu, 'is-active' );
    } else {
      TenUp_Menu_Dropdown.addClass( menu, 'is-active' );
    }

    // Update the menu state within the button
    if( this.getAttribute( 'aria-expanded') === 'false' ) {
      this.setAttribute( 'aria-expanded', 'true' );
    } else {
      this.setAttribute( 'aria-expanded', 'false' );
    }

    // Set focus to the first item in the menu
    menu.querySelectorAll('a')[0].focus();

  }

} )( this, this.document );
