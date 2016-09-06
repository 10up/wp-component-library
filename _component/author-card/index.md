---
title: Author Card
layout: component
path_slug: author-card
category: content
---

{% include_relative _notes.md %}

<a href="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" target="_blank" class="example-link">Open example in new window</a>
<iframe class="large" src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html"></iframe>

<h3>HTML <a href="component.html" target="_blank">View Generated HTML</a></h3>

```php
{% include_relative component-wp.html %}
```

<h3>SCSS <a href="scss/component.scss" target="_blank">Download SCSS</a></h3>

```scss
{% include_relative scss/component.scss %}
```

<h3>Resources</h3>

{% include_relative _resources.md %}
