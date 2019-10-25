"use strict";

(function() {

	var App = {};

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

	App.resize_iframe = function( e ) {

		var width = e.target.getAttribute('data-width');
		var iframeSelector = e.target.getAttribute('aria-controls');
		var iframe = document.getElementById(iframeSelector);
		var width_class = 'c-iframe--' + width;

		// Remove all the potential classes so we don't need to check
		iframe.classList.remove( 'c-iframe--small' );
		iframe.classList.remove( 'c-iframe--medium' );
		iframe.classList.remove( 'c-iframe--large' );

		// Add the correct one back on
		if( width !== 'reset' ) {
			iframe.classList.add( width_class );
		}

	};

	App.rwdButtons = function() {

		var buttons = document.querySelectorAll('.rwd-button');
		var buttonCount = buttons.length;
		var i;
		console.log(buttons);
		for ( i = 0; i < buttonCount; i = i + 1 ) {
			buttons[i].addEventListener('click', App.resize_iframe );
		}
	};

	App.navigation();

	if ( document.querySelectorAll('.rwd-button').length ) {

		App.rwdButtons();
	}

	if ( document.querySelector('.tabs') ) {
		var tabs = new TenUp.tabs( '.tabs' );
	}

	var clipboard = new Clipboard('.copy-clipboard');

	clipboard.on('success', function(e) {
		e.trigger.innerText = 'Copied!';
		setTimeout( function() {
			e.trigger.innerText = 'Copy to clipboard';
		}, 3000 );
	});

})();
