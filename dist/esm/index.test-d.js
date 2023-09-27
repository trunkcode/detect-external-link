'use strict';
import detectExternalLink from './index';
const multipleHosts = {
    'hosts': [
        'http://example.com',
        'http://test.example.com',
    ]
};
const singleHost = {
    'hosts': ['http://example.com']
};
const testLink = 'https://example.com';
if (singleHost) {
    console.log(detectExternalLink(testLink, singleHost));
}
if (multipleHosts) {
    console.log(detectExternalLink(testLink, multipleHosts));
}
