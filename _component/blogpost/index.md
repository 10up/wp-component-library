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

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html"></iframe>

<h3>HTML <a href="component.html" target="_blank">View Generated HTML</a></h3>
<div class="code-tab-control">
	<ul class="code-tab-list">
		<li class="code-tab-item"><a href="#templated" id="js-templated-link" class="show">Templated</a></li>
		<li class="code-tab-item"><a href="#text" id="js-text-link">Text</a></li>
	</ul>
</div><!-- //.tab-control -->

<div id="templated" class="code-tab show"></div>
```html
{% include_relative component-templated.html %}
```

<div id="text" class="code-tab"></div>
```html
{% include_relative component-text.html %}
```

<h3>Resources</h3>

{% include_relative _resources.md %}
