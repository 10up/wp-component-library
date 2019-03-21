---
title: Social Sharing Links
path_slug: social-links
layout: component
category: ui
---

{% include_relative _notes.md %}

<div class="cf">
	<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
</div><!--/.cf-->

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html" title="Social Links Example"></iframe>

<h3>HTML</h3>

{% include partials/html-tabs.md %}

<h3>SCSS <span class="link"><a href="scss/component.scss" target="_blank">Download SCSS</a></span></h3>

{% include partials/scss-component.md %}

<h3>JS <span class="link"><a href="component-usage.js" target="_blank">Usage</a> | <a href="component.js" target="_blank">Plugin</a></span></h3>

{% include partials/js-component.md %}

{% include_relative _apis.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
