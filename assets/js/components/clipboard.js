var clipboard = new Clipboard('.copy-clipboard');

clipboard.on('success', function(e) {
	e.trigger.innerText = 'Copied!';
	setTimeout( function() {
		e.trigger.innerText = 'Copy to clipboard';
	}, 3000 );
});
