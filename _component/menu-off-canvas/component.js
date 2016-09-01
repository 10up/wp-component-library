;(function (w, doc) {

  // Enable strict mode
  "use strict";

  var subMenuItem = doc.querySelectorAll( '.sub-menu .menu-item' ),
  subMenu     = doc.querySelectorAll( '.sub-menu' );

  doc.addEventListener( 'focus', focusToggle, true );

  function focusToggle( e ) {
    if ( e.target.classList.contains( 'menu-level-1' ) ) {
      subMenu[0].classList.add( 'hover' );
    } else {
      subMenu[0].classList.remove( 'hover' );
    }
  }


  function showSubMenu( subMenuToggle, subMenu ) {

    if( subMenu.getAttribute( 'aria-hidden' ) === 'true' ) {
      subMenu.setAttribute( 'aria-hidden', 'false');
      subMenu.querySelectorAll('a')[0].focus();
    } else {
       subMenu.setAttribute( 'aria-hidden', 'true');
    }

  }

  /**
  * Adds helper function for devs to plug in basic values to assist in off canvas functionality.
  * @param {Element} toggler         //The class name of the element that toggles the off canvas menu.
  * @param {Element} primaryMenu     //The class name of the element that is the primary menu.
  * @param {Element} primaryMenuWrap //The wrapper that contains the primary menu.
  * @param {String} direction        //The direction that the off canvas menu should fly in from.
  */
  function offCanvas( toggler, primaryMenu, primaryMenuWrap, direction ) {
    var body   = doc.body,
    menuToggle = doc.querySelector( toggler ),
    menu       = doc.querySelector( primaryMenu ),
    wrap       = doc.querySelector( primaryMenuWrap ),
    subMenus   = menu.querySelectorAll('[aria-haspopup="true"]'),
    dir        = direction;

    menuToggle.onclick = function() {

      menu.classList.toggle( 'is-active' );
      body.classList.toggle( 'is-active-off-canvas' );

      // Update the menu state within the button
      if( this.getAttribute( 'aria-expanded') === 'false' ) {
        this.setAttribute( 'aria-expanded', 'true' );
      } else {
        this.setAttribute( 'aria-expanded', 'false' );
      }

      // Set focus to the first item in the menu
      menu.querySelectorAll('a')[0].focus();

      if( body.classList.contains( 'is-active-off-canvas' ) ) {
        var menuWidth = menu.offsetWidth,
            bodyDir   = dir,
            wrapDir   = dir,
            bodyDir   = ( bodyDir === 'left' ) ? body.style.left = menuWidth + 'px' : body.style.right = menuWidth + 'px',
            wrapDir   = ( wrapDir === 'left' ) ? wrap.style.left = -menuWidth + 'px' : wrap.style.right = -menuWidth + 'px';

        wrap.classList.add( dir );
      } else {
        var bodyDir   = dir,
            wrapDir   = dir,
            bodyDir   = ( bodyDir === 'left' ) ? body.style.left = '0' : body.style.right = '0',
            wrapDir   = ( wrapDir === 'left' ) ? wrap.style.left = '0' : wrap.style.right = '0';

        wrap.classList.remove( dir );
      }
    } // end click

      for ( var i = 0; i < subMenus.length; i = i + 1 ) {

        var subMenuToggle = subMenus[i],
            parent,
            subMenu;

        subMenuToggle.addEventListener( "click", function( e ) {

          e.preventDefault();

          parent = this.parentNode,
          subMenu = parent.querySelectorAll('.sub-menu')[0];

          showSubMenu( subMenuToggle, subMenu );

        }, false );

      }

  } // end offCanvas

  offCanvas( '.site-menu-toggle', '.primary-menu', '.site-header', 'left' );

} )( this, this.document );
