;(function (w, doc) {

  // Enable strict mode
  "use strict";

  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    firstDay: 1,
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020]
  });

} )( this, this.document );