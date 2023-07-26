'use strict';

const assert = require('assert');
const detectExternalLink = require('../index').default;

describe('Test `relative` links', () => {
  it('single domain', () => {
    const link = '/test/abc/';
    const linkOptions = {
      'hosts': ['http://example.com']
    };

    assert.strictEqual(detectExternalLink(link, linkOptions), false);
  });

  it('multiple domains', () => {
    const link = '/test/abc/';
    const linkOptions = {
      'hosts': [
        'http://example.com',
        'http://test.example.com'
      ]
    };

    assert.strictEqual(detectExternalLink(link, linkOptions), false);
  });
});

describe('Test `internal` links (absolute) with configuration', () => {
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

describe('Test `internal` links (absolute) without configuration', () => {
  it('single domain', () => {
    const link = 'http://example.com/test/abc/';

    assert.strictEqual(detectExternalLink(link), true);
  });

  it('multiple domains', () => {
    const link = 'http://test.example.com/test/abc/';

    assert.strictEqual(detectExternalLink(link), true);
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
