# 10up Component Library

> A library of barebones front-end components built with WordPress and accessibility in mind.

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![MIT License](https://img.shields.io/github/license/10up/wp-component-library.svg)](https://github.com/10up/wp-component-library/blob/gh-pages/LICENSE.md)

## Overview

At 10up, we strive to provide websites that yield a top-notch user experience. In order to improve both our efficiency and consistency, we need to standardize what we use and how we use it. Standardizing our approach to commonly-used front-end components allows us to understand better the inner workings of someone else’s project and to produce better solutions for ourselves and our clients.

Each component in this library is built with simplicity and accessibility in mind, tailored to fit the often opinionated nature of WordPress core output. These components are intended to be easily adapted to any number of different projects and use cases.

All components are tested to be WCAG 2.1 Compliant.

**[Start browsing ☞](https://10up.github.io/wp-component-library/)**

## How to Use

To use a component, navigate to the component’s detail page to see demos, usage examples, and to learn how to install.

## Dependencies

1. [.editorconfig](http://editorconfig.org/) Plugin - The .editorconfig file ensures that everyone contributing to the project will use the same indentation.

## Structure

```
components/
├── component-name/
│   ├── _notes.md
│   ├── _resources.md
│   ├── _support.md
│   ├── component.css
│   ├── component.js
│   ├── component.html
│   ├── component-wp.html (optional)
│   ├── example.html
│   ├── index.md
│   ├── scss/
│       ├── component-name.scss

.editorconfig
.gitignore
README.md
```

## Running Locally

```
gem install bundler
bundle install
bundle exec jekyll serve
```

Once `bundle exec jekyll serve` has run, you can view the 10up Component library in your browser by copying/pasting the server address from your command line. It will look similar to the code below.

```
Configuration file: /[your-path-to-project]/wp-component-library/_config.yml
    Server address: http://127.0.0.1:4000/wp-component-library/
  Server running... press ctrl-c to stop.
```

Check out Github's documentation on [local Jekyll setup](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-4-build-your-local-jekyll-site) for more info.

## Support Level

**Active:** 10up is actively working on this, and we expect to continue work for the foreseeable future including keeping tested up to the most recent version of WordPress. Bug reports, feature requests, questions, and pull requests are welcome.

## Like what you see?

<a href="http://10up.com/contact/"><img src="https://10updotcom-uploads.s3.amazonaws.com/uploads/2016/08/10up_github_banner-2.png"></a>
