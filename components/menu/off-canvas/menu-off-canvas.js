var subMenuItem = document.querySelectorAll( '.sub-menu .menu-item' ),
    subMenu     = document.querySelectorAll( '.sub-menu' );

document.addEventListener( 'focus', focusToggle, true );

function focusToggle( e ) {
  if ( e.target.classList.contains( 'menu-level-1' ) ) {
    subMenu[0].classList.add( 'hover' );
  } else {
    subMenu[0].classList.remove( 'hover' );
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
  var body       = document.body,
      menuToggle = document.querySelector( toggler ),
      menu       = document.querySelector( primaryMenu ),
      wrap       = document.querySelector( primaryMenuWrap ),
      dir        = direction;

  menuToggle.onclick = function() {
    menu.classList.toggle( 'is-active' );
    body.classList.toggle( 'is-active-off-canvas' );

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
  }
}

offCanvas( '.site-menu-toggle', '.primary-menu', '.site-header', 'right' );