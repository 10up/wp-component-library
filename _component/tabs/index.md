---
title: Tabs
path_slug: tabs
layout: component
category: ui
iframe_height: medium
---

{% include_relative _notes.md %}

<div class="cf">
	<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
</div><!--/.cf-->

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html" title="Tabs Example"></iframe>

<h3>HTML</h3>

{% include partials/html-component.md %}

<h3>PostCSS <span class="link"><a href="css/component.css" target="_blank">Download PostCSS</a></span></h3>

{% include partials/css-component.md %}

<h3>JavaScript <span class="link"><a href="https://github.com/10up/component-tabs/" target="_blank">Plugin</a></span></h3>

Create a new instance by supplying the selector to use for the tabs and an object containing any necessary callback functions.

<h4>NPM</h4>

`npm install --save @10up/component-tabs`

{% include partials/js-component.md %}

{% include_relative _standalone-js.md %}

{% include_relative _apis.md %}

<h3>Browser Compatibility</h3>

{% include_relative _support.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
