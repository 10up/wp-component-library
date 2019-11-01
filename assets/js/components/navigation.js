App.navigation = function() {

	var toggle = document.getElementById('c-nav__toggle');
	var href = toggle.getAttribute('href');
	var target, state, firstLink;

	toggle.setAttribute('aria-expanded', 'false');

	toggle.addEventListener( 'click', function( e ) {
		e.preventDefault();

		target = document.querySelector(href);
		firstLink = target.querySelector('a');
		state = window.getComputedStyle(target);

		if ( state.getPropertyValue('display') === 'none' ) {
			this.setAttribute('aria-expanded', 'true');
			target.style.display = 'block';
			target.classList.add('is-open');
			document.body.style.overflow = 'hidden';
			firstLink.focus();
		} else {
			this.setAttribute('aria-expanded', 'false');
			target.style.display = 'none';
			document.body.style.overflow = 'auto';
			target.classList.remove('is-open');
		}

	}, false );

	window.addEventListener('resize', function() {
		var width = document.documentElement.clientWidth;

		if ( width >= 700 && document.getElementById('nav').classList.contains('is-open')) {
			document.getElementById('c-nav__toggle').setAttribute('aria-expanded', 'false');
			document.body.removeAttribute('style');
			document.getElementById('nav').removeAttribute('style');
			document.getElementById('c-nav__toggle').focus();
		}

	}, false);

	document.addEventListener('keyup', function( e ) {
		if ( e.keyCode === 27 && document.getElementById('nav').classList.contains('is-open')) {
			document.getElementById('c-nav__toggle').click();
			document.getElementById('c-nav__toggle').focus();
		}
	}, false);

};

App.navigation();
