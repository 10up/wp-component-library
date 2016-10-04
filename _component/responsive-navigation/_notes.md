The responsive navigation component is a normal horizontal navigation on large screen, and collapses down to an off-canvas model on small viewports. The default HTML should work within the confines of WordPress, but some modifications may have to be implemented for your specific use case. No jQuery is required.

### JavaScript API

#### TenUp.navigation({ options });

This is the main method to call the plugin. It currently takes 3 options: target, toggle, sub_menu_open. To request more options, please [file an issue](https://github.com/10up/wp-component-library/issues).

#### 'target' : '#primary-nav'

The `target` option should contain the ID (with #) on the navigation `<ul>`. Using an ID will be faster than a class, but they should both work. The default value is `#primary-nav`.

#### 'toggle' : '#js-menu-toggle'

The `toggle` option is the ID value assigned to the anchor used to toggle the small screen menu. The default value is `#js-menu-toggle`.

#### 'sub_menu_open' : 'click'

The `sub_menu_open` option lets you set the style on opening the menu for large screen. The default value is `hover`, but `click` is another option.

### Sass API

To turn off the large screen view all together set the Sass variable `$use-large-screen` to `false` in the .scss file. All breakpoints (for CSS and JS are managed in the Sass file).
