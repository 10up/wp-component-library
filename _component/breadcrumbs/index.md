---
title: Breadcrumbs
layout: component
path_slug: breadcrumbs
category: navigation
iframe_height: medium
---

{% include_relative _notes.md %}

<div class="cf">
	<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
</div><!--/.cf-->

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html" title="Breadcrumbs Example"></iframe>

<h3>HTML</h3>
{% include partials/html-component.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
