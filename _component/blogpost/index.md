---
title: Blog Post
layout: component
path_slug: blogpost
category: content
---

{% include_relative _notes.md %}

<iframe class="large" src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html"></iframe>

<h3>HTML <a href="component.html">View Generated HTML</a></h3>

```html
{% include_relative component.html %}
```

<h3>Resources</h3>

{% include_relative _resources.md %}
