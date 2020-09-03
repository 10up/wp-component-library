---
title: Reading Position
layout: default
seo-title: Reading Position
description: A reading position indicator to show how far you are on a page or beween two points
keywords: progress, html, wordpress, css, javascript
path_slug: reading-position
iframe_height: short
category: utility
---

<div class="u-align-center--small">
	<h1>{{page.title}}</h1>
	<p class="u-lighten">
		{{page.description}}
	</p>
	<a href="https://github.com/10up/component-reading-position/actions?query=workflow%3A%22Accessibility+Tests%22"><img src="https://github.com/10up/component-reading-position/workflows/Accessibility%20Tests/badge.svg" alt="Build Status"></a>
</div>

{% include_relative content/_notes.md %}

<div class="u-spacing__top--large">

	<h2>Examples</h2>

	<div class="component-block u-spacing__bottom--large">
		{% include_relative content/_examples.md %}
		<ul class="button-group button-group--flush">
			<li><button data-width="small" id="rwd-button-small" type="button" class="rwd-button button button--tertiary" aria-controls="example-iframe" aria-label="Resize iframe display: small.">Small Screen</button></li>
			<li><button data-width="large" id="rwd-button-large" type="button" class="rwd-button button button--tertiary" aria-controls="example-iframe" aria-label="Resize iframe display: large.">Large Screen</button></li>
			<li><button data-width="reset" id="rwd-button-reset" type="button" class="rwd-button button button--tertiary-dark button--tertiary" aria-controls="example-iframe" aria-label="Reset iframe display.">Reset</button></li>
		</ul>
	</div>
</div>

## Usage
<div class="component-block u-spacing__bottom--large">
	{% include_relative content/_code.md %}
</div>

## Documentation
<div class="component-block u-spacing__bottom--large">
	{% include_relative content/_documentation.md %}
</div>

## Browser Compatibility
<div class="component-block u-spacing__bottom--large">
	{% include_relative content/_support.md %}
</div>
