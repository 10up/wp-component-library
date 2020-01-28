---
title: Blog Post
layout: default
seo-title: Blog Post
description: A semantic recommendation for marking up an blog post.
keywords: blog post, html, wordpress
path_slug: blogpost
category: content
iframe_height: tall
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
