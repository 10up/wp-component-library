## Installation

### NPM
`npm install --save @10up/component-reading-position`

### Standalone
Clone this repo and import `reading-position.js` and `reading-position.css` from the `dist/` directory.

## API

This component accepts two arguments, the selector for the reading-position container and an object containing optional callbacks.

### Callbacks

- `onCreate`: Called after the reading-position is initialized on page load
- `scrollStart`: Called when the scrollable are enters the visible area
- `scrollEnd`: Called when the scrollable are leaves the visible area
- `scrolling`: Called when on scroll events while the scrollable area is in the visible area

## Usage

### Markup

This is the markup template expected by the component.

```html
<progress class="reading-position"></progress>
```

### CSS

The styles can be imported into your existing codebase by using PostCSS imports, or by including the standalone CSS file in your project.

#### PostCSS Imports
`@import '@10up/component-reading-position';`

#### Standalone
Include the `reading-position.css` file from the `dist/` directory.

### JavaScript

Create a new instance by supplying the selector to use for the reading-position and an object containing any necessary callback functions.

#### NPM

```javascript
import ReadingPosition from '@10up/component-reading-position';

new ReadingPosition( '.reading-position', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	scrollStart: function( percentage ) {
		console.log( 'scrollStart callback', percentage );
	},
	scrollEnd: function( percentage ) {
		console.log( 'scrollEnd callback', percentage );
	},
	scrolling: function( percentage ) {
		console.log( 'scrolling callback', percentage );
	}
} );
```

#### Standalone

Include the `reading-position.js` file from the `dist/` directory and access the component from the gobal `TenUp` object.

```javascript
let myReadingPosition = new TenUp.readingPosition( '.reading-position', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	scrollStart: function( percentage ) {
		console.log( 'scrollStart callback', percentage );
	},
	scrollEnd: function( percentage ) {
		console.log( 'scrollEnd callback', percentage );
	},
	scrolling: function( percentage ) {
		console.log( 'scrolling callback', percentage );
	}
} );
```

## Demo

Example implementations can be found in the `demo` directory.
