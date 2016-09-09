10up Component Library
=====================

At 10up, we strive to provide websites that yield a top-notch user experience. In order to improve both our efficiency and consistency, we need to standardize what we use and how we use it. Standardizing our approach to commonly-used front-end components allows us to understand better the inner workings of someone else’s project and produce better solutions ourselves and our clients.

Each component in this library is built with simplicity and accessibility in mind, tailored to fit the often opinionated nature of WordPress core output. These components are intended to be easily adapted to any number of different projects and use cases.

<a href="http://10up.com/contact/"><img src="https://10updotcom-wpengine.s3.amazonaws.com/uploads/2016/08/10up_github_banner-2.png"></a>

**[Start browsing ☞](https://10up.github.io/component-library/)**

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
│   ├── example.html
│   ├── index.md
│   ├── scss/
│       ├── component-name.scss

.editorconfig
.gitignore
README.md
```

## Contributing

We don't know everything! We welcome pull requests and spirited, but respectful, debates. Please contribute via [pull requests on GitHub](https://github.com/10up/component-library/pulls).

1. Fork it!
2. Create your feature branch: `git checkout -b component/my-new-component`
3. Commit your changes: `git commit -am 'Added some great feature!'`
4. Push to the branch: `git push origin component/my-new-component`
5. Submit a pull request

## Running Locally

```
gem install bundle
bundle install
bundle exec jekyll serve
```

## License

Released under MIT by, and copyright 2016 by [10up](http://10up.com).
