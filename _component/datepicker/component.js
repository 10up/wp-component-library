( function() {

	// Enable strict mode
	'use strict';

	var datepicker = document.getElementById( 'js-datepicker' );
	if ( ! datepicker ) {
		return;
	}

	var picker = new Pikaday( {
		field: datepicker,
		firstDay: 1,
		minDate: new Date(),
		maxDate: new Date( 2020, 12, 31 ),
		yearRange: [ 2000, 2020 ]
	} );

} )();
