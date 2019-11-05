let tabsInstance = new TenUp.tabs( '.tabs', {
  onCreate: function() {
    console.log( 'onCreate callback' );
  },
  onTabChange: function() {
    console.log( 'onTabChange callback' );
  }
} );
