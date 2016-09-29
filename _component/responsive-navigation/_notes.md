The responsive navigation component is a normal horizontal navigation on large screen, and collapses down to an off-canvas model on small viewports. The default HTML should work within the confines of WordPress, but some modifications may have to be implemented for your specific use case. No jQuery is required.

### API

To open the submenus with a click event on medium/large screen add `data-submenu="click"` on the `#js-menu-toggle` anchor link (the one that open/closes the menu on small screen).

To turn off the large screen view all together set the Sass variable `$use-large-screen` to `false` in the .scss file
