### JavaScript API

This component accepts two arguments, the selector for the navigation container and an object containing configuration settings and optional callbacks.

#### Settings

 - `action`: The action to use to open menu items _(default) **hover**_
 - `breakpoint`: Viewport breakpoint to switch to small screen menu _(default) **(min-width: 48em)**_

#### Callbacks

 - `onCreate`: Called after the component is initialized on page load
 - `onOpen`: Called when a menu item is opened
 - `onClose`: Called when a menu item is closed
 - `onSubmenuOpen`: Called when a submenu item is opened
 - `onSubmenuClose`: Called when a submenu item is closed
