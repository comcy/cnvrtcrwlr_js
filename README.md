# CnvrtdwnJs

> cnvrtdwn_js gives the possibility to read in markdown written texts and print them out as a html file.

**Badges will go here**

- build status
- issues (waffle.io maybe)
- devDependencies
- npm package
- coverage
- slack
- downloads
- gitter chat
- license
- etc.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger)

- For more on these wonderful ~~badgers~~ badges, refer to <a href="http://badges.github.io/badgerbadgerbadger/" target="_blank">`badgerbadgerbadger`</a>.


---

## Table of Contents

- [CnvrtdwnJs](#cnvrtdwnjs)
    - [Table of Contents](#table-of-contents)
    - [Example](#example)
    - [Installation](#installation)
        - [Clone](#clone)
        - [Setup](#setup)
    - [Features](#features)
    - [Usage](#usage)
    - [Documentation](#documentation)
    - [Tests](#tests)
    - [Contributing](#contributing)
    - [License](#license)

---

## Example

```shell
cnvrtcrwlr -i ./path/to/my/README.md -o ./README.html 
```

---

## Installation

1. Install the package global or to your devDependencies

```shell
$ npm install -g | --save | --save-dev cnvrtdwn-js
```

### Clone

Clone this repo to your local machine using `https://github.com/comcy/cnvrtcrwlr_js.git`

### Setup

Install npm packages

```shell
$ npm install
```

---

## Features

Planned features:

1. More intelligent argument parsing
2. Improve docs
3. Add tests
4. Error handling
5. Preparation for static site generator

## Usage

If you want to use the tool during a build process modify your *package.json* by adding a *cnvrtdwn* script to the scripts section


`package.json`
```json
  ...
  "scripts": {
      ...
      "cnvrtdwn": "index.js"
  },
  ...
```

## Documentation

TODO: Show docs

## Tests

TODO: Add tests

---

## Contributing

Commit issues under: https://github.com/comcy/cnvrtcrwlr_js/issues

Feel free to improve code via *Pull Requests*.

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © Christian Silfang