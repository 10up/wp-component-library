### JavaScript API

#### TenUp.modal( { options }, callback );

This is the main method to call the plugin. It currently takes two arguments, an options object and callback function.

#### `options`

Currently recognizes the following: target. To request more options, please [file an issue](https://github.com/10up/wp-component-library/issues).

`target : '#primary_modal'`

The `target` option should contain the ID or class of the modal dialog (the window that pops up).

`trigger : '#primary_modal_trigger'`

The `trigger` option should contain the ID or class of modal trigger (the clicked element that opens the modal)

#### `callback`

Accepts a function that will be executed upon completion.
