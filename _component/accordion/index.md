---
title: Accordion
layout: component
path_slug: accordion
category: ui
iframe_height: medium
---

{% include_relative _notes.md %}

<div class="cf">
	<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
</div><!--/.cf-->

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html"></iframe>

<h3>HTML <span class="link"><a href="component.html" target="_blank">View Generated HTML</a></span></h3>

{% include partials/html-tabs.md %}

<h3>PostCSS <span class="link"><a href="scss/component.scss" target="_blank">Download PostCSS</a></span></h3>
{% include partials/scss-component.md %}


<h3>JavaScript <span class="link"><a href="https://github.com/10up/component-accordion" target="_blank">Plugin</a></span></h3>

<h4>NPM</h4>
`npm install --save @10up/component-accordion`

{% include partials/js-component.md %}

<h4>Standalone</h4>
Clone this repo and import `accordion.js` and `accordion.css` from the `dist/` directory.

{% include_relative _more-js.md %}

{% include_relative _apis.md %}

<h3>Browser Compatibility</h3>

{% include_relative _support.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
