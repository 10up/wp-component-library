;(function (w, doc) {

  // Enable strict mode
  "use strict";

  var subMenuItem = document.querySelectorAll( '.sub-menu .menu-item' ),
  subMenu     = document.querySelectorAll( '.sub-menu' );

  document.addEventListener( 'focus', focusToggle, true );

  function focusToggle( e ) {
    if ( e.target.classList.contains( 'menu-level-1') ) {
      subMenu[0].classList.add( 'hover' );
    } else {
      subMenu[0].classList.remove( 'hover' );
    }
  }

  var menuToggle = document.querySelector( '.site-menu-toggle' ),
  menu       = document.querySelector( '.primary-menu' );

  menuToggle.onclick = function() {
    menu.classList.toggle( 'is-active' );

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