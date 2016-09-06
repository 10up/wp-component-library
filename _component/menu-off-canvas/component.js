;(function (w, doc) {

  // Enable strict mode
  "use strict";

	// Local object for method references
	var TenUp_Menu_Off_Canvas = {};

	// Namespace
	TenUp_Menu_Off_Canvas.ns = "Accessible Modal Dialog";

	/*
		Cross-browser way to deal with class management
	*/

	TenUp_Menu_Off_Canvas.hasClass = function ( el, cls ) {
		if (el.classList) {
		  return el.classList.contains(cls);
		} else {
		  return !!el.cls.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		}
	};

	/*
		Cross-browser way to add a class
	*/

	TenUp_Menu_Off_Canvas.addClass = function ( el, cls ) {
		if ( el.classList ) {
		  el.classList.add( cls );
		} else if( !TenUp_Menu_Off_Canvas.hasClass( el, cls ) ) {
		  el.cls += " " + cls;
		}
	};

	/*
		Cross-browser way to remove a class
	*/

	TenUp_Menu_Off_Canvas.removeClass = function ( el, cls ) {
		if ( el.classList ) {
		  el.classList.remove( cls );
		} else if( TenUp_Menu_Off_Canvas.hasClass( el, cls ) ) {
		  var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
		  el.cls = el.cls.replace( reg, ' ' );
		}
	};

	/*
		Start Component
	*/

  var subMenuItem = doc.querySelectorAll( '.sub-menu .menu-item' );
  var subMenu = doc.querySelectorAll( '.sub-menu' );

  doc.addEventListener( 'focus', focusToggle, true );

  function focusToggle( e ) {
	if ( TenUp_Menu_Off_Canvas.hasClass( e.target, 'menu-level-1' ) ) {
      TenUp_Menu_Off_Canvas.addClass( subMenu[0], 'hover' );
    } else {
      TenUp_Menu_Off_Canvas.removeClass( subMenu[0], 'hover' );
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

	  if ( TenUp_Menu_Off_Canvas.hasClass( menu, 'is-active' ) ) {
		  TenUp_Menu_Off_Canvas.removeClass( menu, 'is-active' )
	  } else {
		  TenUp_Menu_Off_Canvas.addClass( menu, 'is-active' )
	  }

	  if ( TenUp_Menu_Off_Canvas.hasClass( body, 'is-active-off-canvas' ) ) {
		  TenUp_Menu_Off_Canvas.removeClass( body, 'is-active-off-canvas' )
	  } else {
		  TenUp_Menu_Off_Canvas.addClass( body, 'is-active-off-canvas' )
	  }

      // Update the menu state within the button
      if ( this.getAttribute( 'aria-expanded') === 'false' ) {
        this.setAttribute( 'aria-expanded', 'true' );
      } else {
        this.setAttribute( 'aria-expanded', 'false' );
      }

      // Set focus to the first item in the menu
      menu.querySelectorAll('a')[0].focus();

	  if ( TenUp_Menu_Off_Canvas.hasClass( body, 'is-active-off-canvas' ) ) {

        var menuWidth = menu.offsetWidth,
            bodyDir   = dir,
            wrapDir   = dir,
            bodyDir   = ( bodyDir === 'left' ) ? body.style.left = menuWidth + 'px' : body.style.right = menuWidth + 'px',
            wrapDir   = ( wrapDir === 'left' ) ? wrap.style.left = -menuWidth + 'px' : wrap.style.right = -menuWidth + 'px';

        TenUp_Menu_Off_Canvas.addClass( wrap, dir );

      } else {
        var bodyDir   = dir,
            wrapDir   = dir,
            bodyDir   = ( bodyDir === 'left' ) ? body.style.left = '0' : body.style.right = '0',
            wrapDir   = ( wrapDir === 'left' ) ? wrap.style.left = '0' : wrap.style.right = '0';

        TenUp_Menu_Off_Canvas.removeClass( wrap, dir );
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
