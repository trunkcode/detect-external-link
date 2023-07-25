# detect-external-link

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]

Node.js plugin that analyzes the given link and determines if the URL is internal or external. To ensure accuracy, please include a list of specified hosts that should be marked as internal. This way, the plugin can effectively differentiate between internal and external links based on the provided hosts list.

## Install

Via `npm`

```bash
npm install detect-external-link
```

Via Yarn

```bash
yarn add detect-external-link
```

## Usage

```javascript
const detectExternalLink = require('detect-external-link').default;

const link = 'http://test.example2.com/test/abc/';
const linkOptions = {
  'hosts': [
    'http://example.com',
    'http://test.example.com'
  ]
};

console.log(detectExternalLink(link, linkOptions));
```

## Parameters

| Attributes |  Type | Required | Default |                 Description                |
|:----------:|:-----:|:--------:|:-------:|:------------------------------------------:|
|    hosts   | Array |    Yes   |    []   | Site hostname(s) to detect external links. |

[npm-image]: https://img.shields.io/npm/v/detect-external-link.svg
[npm-url]: https://www.npmjs.com/package/detect-external-link
[downloads-image]: https://img.shields.io/npm/dt/detect-external-link.svg

[travis-image]: https://api.travis-ci.com/trunkcode/detect-external-link.svg?branch=main
[travis-url]: https://travis-ci.com/trunkcode/detect-external-link

[appveyor-url]: https://ci.appveyor.com/project/trunkcode/detect-external-link
[appveyor-image]: https://img.shields.io/appveyor/ci/trunkcode/detect-external-link.svg?label=appveyor
