;(function ( w, doc ) {

  // Enable strict mode
  'use strict';

  ( function hashClick() {

    // wait for everything to be loaded
    w.onload = function() {

      // is there a #hash in the url?
      if ( w.location.hash ) {

        var hashValue = w.location.hash;
        var element = doc.querySelector("a[href='" + hashValue + "']");
        var data = doc.querySelector("[data-href='" + hashValue + "']");

        if( element ) { element.click(); }
        if( data ) { data.click(); }

      } // End if

    } // End window.onload

  })();

})( this, this.document );