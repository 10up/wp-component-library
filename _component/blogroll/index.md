---
title: Blogroll
layout: default
seo-title: Blogroll
description: A semantic recommendation for marking up an blogroll/article listing.
keywords: blogroll, html, wordpress
path_slug: blogroll
category: content
iframe_height: medium
---

<div class="u-align-center--small">
	<h1>{{page.title}}</h1>
	<p class="u-lighten u-spacing__bottom--large">
		{{ page.description }}
	</p>
</div>

{% include_relative content/_notes.md %}

<div class="u-spacing__top--large">

	<h2>Examples</h2>

	<div class="component-block u-spacing__bottom--large">
		{% include_relative content/_examples.md %}
	</div>
</div>

## Usage
<div class="component-block u-spacing__bottom--large">
	{% include_relative content/_code.md %}
</div>

## Resources
<div class="component-block u-spacing__bottom--large">
	{% include_relative content/_resources.md %}
</div>
