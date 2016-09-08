---
title: Modal
path_slug: modal
layout: component
category: ui
iframe_height: medium
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
<h3>SCSS <a href="scss/component.scss" target="_blank">Download SCSS</a></h3>

```scss
{% include_relative scss/component.scss %}
```

<h3>JS <a href="component.js" target="_blank">Download JS</a></h3>

```javascript
{% include_relative component.js %}
```

<h3>Browser Compatibility</h3>

{% include_relative _support.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
