---
title: Read More
path_slug: readmore
layout: component
category: content
---

{% include_relative _notes.md %}

<iframe class="medium" src="{{ site.baseurl}}/component/{{ page.path_slug }}/example.html"></iframe>

<h3>HTML</h3>

```html
{% include_relative component.html %}
```
<h3>SCSS <a href="scss/component.scss">Download SCSS</a></h3>

```scss
{% include_relative scss/component.scss %}
```

<h3>Resources</h3>

{% include_relative _resources.md %}
