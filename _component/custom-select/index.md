---
title: Custom Select Form
path_slug: custom-select
layout: component
category: ui
---

{% include_relative _notes.md %}

<div class="cf">
	<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
</div><!--/.cf-->

<iframe {% if page.iframe_height %}class="h-{{ page.iframe_height }}"{% endif %} src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html"></iframe>

<h3>HTML</h3>
```html
{% include_relative component.html %}
```
<h3>SCSS <span class="link"><a href="scss/component.scss" target="_blank">Download SCSS</a></span></h3>

```scss
{% include_relative scss/component.scss %}
```

<h3>Browser Compatibility</h3>

{% include_relative _support.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
