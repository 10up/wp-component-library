
// Get your modals (or just get 1)
var modals = document.querySelectorAll('.a11y-modal');
var modals_count = modals.length;
var i;

// Loop through each modal to set it up
// You don't need this if you're only using 1 modal
for ( i = 0; i < modals_count; i = i + 1 ) {

	a11y_modal.init( {
		'el': modals[i] // needs to be an object, not a string
	}, function() {

		/*

		 This is your callback function, if you want it.
		 If fires after the modals are set up

		 You could load a template in here or maybe open it on load
		 by programatically clicking the open button

		*/

	});

}
