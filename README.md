# detect-external-link

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]
[![Downloads][jsdelivr-image]][jsdelivr-url]

JavaScript plugin that analyzes the given link and determines if the URL is internal or external. To ensure accuracy, please include a list of specified hosts that should be marked as internal. This way, the plugin can effectively differentiate between internal and external links based on the provided hosts list.

## Install

Via `npm`

```bash
npm install detect-external-link
```

Via Yarn

```bash
yarn add detect-external-link
```

For vanilla HTML in modern browsers, import `detect-external-link` from jsDelivr:

```html
<script type="module">
import detectExternalLink from 'https://cdn.jsdelivr.net/npm/detect-external-link@2/+esm';

console.log(detectExternalLink('http://test.example2.com/test/abc/', {
  'hosts': [
    'http://example.com',
    'http://test.example.com'
  ]
}));
</script>
```
## Usage

```javascript
import detectExternalLink from '/js/index.js';

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
[downloads-image]: https://img.shields.io/npm/dm/detect-external-link.svg

[appveyor-url]: https://ci.appveyor.com/project/trunkcode/detect-external-link
[appveyor-image]: https://img.shields.io/appveyor/ci/trunkcode/detect-external-link.svg?label=appveyor

[jsdelivr-image]: https://img.shields.io/jsdelivr/npm/hm/detect-external-link
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/detect-external-link
