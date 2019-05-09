---
title: Blog Post
layout: component
path_slug: blogpost
category: content
iframe_height: large
---

{% include_relative _notes.md %}

<div class="cf">
	<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
</div><!--/.cf-->

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html" title="Blog Post Example"></iframe>

<h3>HTML <span class="link"><a href="component.html" target="_blank">View Generated HTML</a></span></h3>

{% include partials/html-tabs.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
