10up Component Library
=====================

This is the repository for the 10up Component Library.

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
│   ├── component-name.css
│   ├── component-name.js
│   ├── component-name.html
│   ├── scss/
│       ├── component-name.scss

.editorconfig
.gitignore
README.md
```

## Contributing

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
