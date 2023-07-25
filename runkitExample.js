const detectExternalLink = require('detect-external-link').default;

const link = 'http://test.example2.com/test/abc/';
const linkOptions = {
  'hosts': [
    'http://example.com',
    'http://test.example.com'
  ]
};

console.log(detectExternalLink(link, linkOptions));
