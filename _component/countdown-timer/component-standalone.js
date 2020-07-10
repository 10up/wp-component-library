let countdownTimer = new TenUp.CountdownTimer( '.countdown-timer', {
  onCreate: function( instance ) {
    console.log( 'onCreate callback', instance );
  },

  onEnd: function( instance ) {
    console.log( 'onEnd callback', instance );
  },

  onTick: function( instance ) {
    console.log( 'onTick callback', instance );
  },

  allowNegative: false,
  compact: false,
  padValues: false,
  separator: ', ',
  showZeroes: false,
  years: {
    allowed: true,
    singular: 'year',
    plural: 'years'
  },
  weeks: {
    allowed: true,
    singular: 'week',
    plural: 'weeks'
  },
  days: {
    allowed: true,
    singular: 'day',
    plural: 'days'
  },
  hours: {
    allowed: true,
    singular: 'hour',
    plural: 'hours'
  },
  minutes: {
    allowed: true,
    singular: 'minute',
    plural: 'minutes'
  },
  seconds: {
    allowed: true,
    singular: 'second',
    plural: 'seconds'
  }
} );
