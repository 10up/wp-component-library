---
title: Responsive Navigation
layout: default
seo-title: Responsive Navigation
description: An accessible navigation component to help create a masthead.
keywords: responsive navigation, html, wordpress, css, javascript
path_slug: responsive-navigation
category: navigation
iframe_height: short
---

<div class="u-align-center--small">
	<h1>{{page.title}}</h1>
	<p class="u-lighten">
		{{ page.description }}
	</p>
	<a href="https://travis-ci.org/10up/component-navigation" class="u-spacing__bottom--large u-inline-block">
		<img
			src="https://travis-ci.org/10up/component-navigation.svg?branch=master"
			alt="Build status.">
	</a>
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

## Resources
<div class="component-block u-spacing__bottom--large">
	{% include_relative content/_resources.md %}
</div>
