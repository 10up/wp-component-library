---
title: Countdown Timer
path_slug: countdown-timer
layout: default
category: utility
iframe_height: tiny
---

<div class="u-align-center--small">
	<h1>{{page.title}}</h1>
	<p class="u-lighten">
		A timer component that dynamically counts to or from a given time in the future or past.
	</p>

	<a href="https://github.com/10up/component-countdown-timer/actions?query=workflow%3A%22Accessibility+Tests%22" class="u-spacing__bottom--large u-inline-block"><img src="https://github.com/10up/component-countdown-timer/workflows/Accessibility%20Tests/badge.svg" alt="Build Status" style="max-width:100%;"></a>

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

	<p>Create a <code>time</code> wrapper element and give it a <code>datetime</code> attribute with a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats">valid date string</a>. This date string will be used to count to (if it’s in the future), or from (if it’s in the past, and the <code>allowNegative</code> setting is enabled). Make sure the element is targetable with a selector that can be passed to the JavaScript. Refer to the <strong>JavaScript</strong> section below on how to initialize.</p>

	<p>For accessibility purposes, we strongly recommend adding some fallback content inside the <code>time</code> element which can be shown if the JS is unable to run. This content will be replaced by the countdown elements once the JS is initialized.</p>

	<p class="u-spacing__bottom--large">You can create multiple instances on the same page—each will count down independently, as long as they can be targeted by some selector and each contains a valid <code>datetime</code> attribute. To create multiple timer instances with shared settings, give the <code>time</code> elements the same selector and invoke them once using that selector in JS. To create multiple timer instances with different settings, give the <code>time</code> elements different selectors and invoke them separately in JS.</p>

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
