---
title: getting started
layout: default
seo-title: Getting Started
description: Getting up and running locally with this documentation site.
keywords: contributing
path_slug: getting-started
category: documentation
---

<div class="u-align-center--small">
	<h1>{{page.title}}</h1>
	<p class="u-lighten u-spacing__bottom--large">
		{{ page.description }}
	</p>
</div>

<p>
This page will walk you through how to set up this documentation site
locally and contribute to it moving forward. If you'd like to contribute to a component
please read through our <a href="{{ site.baseurl }}/contributing">contributing guidelines</a>.
</p>

## Dependencies

[.editorconfig](http://editorconfig.org/) Plugin - The .editorconfig file ensures that everyone contributing to the project will use the same indentation.

## Structure

<pre class="u-spacing__bottom--large"><code>components/
├── component-name/
│   ├── content
│       ├── _code.md
│       ├── _documentation.md
│       ├── _examples.md
│       ├── _notes.md
│       ├── _resources.md
│       ├── _support.md
│   ├── component-usage.js (optional)
│   ├── component-wp.html (optional)
│   ├── component.css (optional)
│   ├── component.html
│   ├── example.html
│   ├── index.md
.editorconfig
.gitignore
.jscsrc
.jshintrc
components.md
CONTRIBUTING.md
Gemfile
getting-started.md
index.md
LICENSE.md
README.md</code></pre>

## Running Locally

<pre class="u-spacing__bottom--large"><code>gem install bundler
bundle install
bundle exec jekyll serve</code></pre>

Once `bundle exec jekyll serve` has run, you can view the 10up Component library in your browser by copying/pasting the server address from your command line. It will look similar to the code below.

<pre class="u-spacing__bottom--large"><code>Configuration file: /[your-path-to-project]/wp-component-library/_config.yml
Server address: http://127.0.0.1:4000/wp-component-library/
Server running... press ctrl-c to stop.</code></pre>

Check out GitHub's documentation on [local Jekyll setup](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-4-build-your-local-jekyll-site) for more info.
