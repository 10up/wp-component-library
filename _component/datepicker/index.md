---
title: Datepicker Form
path_slug: datepicker
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

<h3>JS <span class="link"><a href="component.js" target="_blank">Usage</a> | <a href="https://github.com/dbushell/Pikaday" target="_blank">Plugin</a></span></h3>

```javascript
{% include_relative component.js %}
```

<h3>Browser Compatibility</h3>

{% include_relative _support.md %}

<h3>Resources</h3>

{% include_relative _resources.md %}
