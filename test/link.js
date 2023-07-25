'use strict';

const assert = require('assert');
const detectExternalLink = require('../index').default;

describe('Test `internal` links', () => {
  it('single domain', () => {
    const link = 'http://example.com/test/abc/';
    const linkOptions = {
      'hosts': ['http://example.com']
    };

    assert.strictEqual(detectExternalLink(link, linkOptions), false);
  });

  it('multiple domains', () => {
    const link = 'http://test.example.com/test/abc/';
    const linkOptions = {
      'hosts': [
        'http://example.com',
        'http://test.example.com'
      ]
    };

    assert.strictEqual(detectExternalLink(link, linkOptions), false);
  });
});

describe('Test `external` links', () => {
  it('single domain', () => {
    const link = 'http://example2.com/test/abc/';
    const linkOptions = {
      'hosts': ['http://example.com']
    };

    assert.strictEqual(detectExternalLink(link, linkOptions), true);
  });

  it('multiple domains', () => {
    const link = 'http://test.example2.com/test/abc/';
    const linkOptions = {
      'hosts': [
        'http://example.com',
        'http://test.example.com'
      ]
    };

    assert.strictEqual(detectExternalLink(link, linkOptions), true);
  });
});
