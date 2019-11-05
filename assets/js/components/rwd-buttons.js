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

	for ( i = 0; i < buttonCount; i = i + 1 ) {
		buttons[i].addEventListener('click', App.resize_iframe );
	}
};

if ( document.querySelectorAll('.rwd-button').length ) {
	App.rwdButtons();
}
