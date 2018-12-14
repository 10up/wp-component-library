#### Installation

##### NPM
`npm install --save @10up/component-tabs`

##### Standalone
Clone this repo and import `tabs.js` and `tabs.css` from the `dist/` directory.

#### API

This component accepts two arguments, the selector for the tab container and an object containing optional callbacks.

##### Callbacks

- `onCreate`: Called after the tabs are initialized on page load
- `onTabChange`: Called after a tab has been changed
