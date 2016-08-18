var subMenuItem = document.querySelectorAll('.sub-menu .menu-item'),
    subMenu     = document.querySelectorAll('.sub-menu');

document.addEventListener('focus', focusToggle, true);

function focusToggle( e ) {
  if ( e.target.classList.contains('is-sub-menu-item' ) || e.target.classList.contains('menu-level-') ) {
    subMenu[0].classList.add('hover');
  } else {
    subMenu[0].classList.remove('hover');
  }
}

function offCanvas( toggler, primary, wrap, direction ) {
  var body       = document.body,
      menuToggle = document.querySelector( toggler ),
      menu       = document.querySelector( primary ),
      wrap       = document.querySelector( wrap ),
      dir        = direction;

  menuToggle.onclick = function() {
    menu.classList.toggle('is-active');
    body.classList.toggle('is-active-off-canvas');
    if( body.classList.contains( 'is-active-off-canvas' ) ) {
      var menuWidth = menu.offsetWidth,
          bodyDir   = dir,
          wrapDir   = dir,
          bodyDir   = (bodyDir === 'left') ? body.style.left = menuWidth + 'px' : body.style.right = menuWidth + 'px',
          wrapDir   = (wrapDir === 'left') ? wrap.style.left = -menuWidth + 'px' : wrap.style.right = -menuWidth + 'px';
      
      wrap.classList.add( dir );
    } else {
      var bodyDir   = dir,
          wrapDir   = dir,
          bodyDir = (bodyDir === 'left') ? body.style.left = '0' : body.style.right = '0',
          wrapDir = (wrapDir === 'left') ? wrap.style.left = '0' : wrap.style.right = '0';
      wrap.classList.remove( dir );
    }
  }
}

offCanvas( '.site-menu-toggle', '.primary-menu', '.site-header', 'left' );