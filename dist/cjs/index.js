"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectExternalLink(linkToCheck, options) {
    const configHosts = [];
    const finalConfig = Object.assign({}, options);
    let isExternal = false;
    let linkOrigin = '';
    if (finalConfig.hosts) {
        let singleHost;
        for (singleHost of finalConfig.hosts) {
            if (singleHost.indexOf('http://') === 0 || singleHost.indexOf('https://') === 0) {
                configHosts.push(new URL(singleHost).hostname);
            }
            else {
                configHosts.push(singleHost);
            }
        }
    }
    if (linkToCheck.indexOf('http://') === 0 || linkToCheck.indexOf('https://') === 0) {
        linkOrigin = new URL(linkToCheck).hostname;
    }
    else if (linkToCheck.indexOf('//') === 0) {
        linkOrigin = new URL('https:' + linkToCheck).hostname;
    }
    if (linkOrigin) {
        if (configHosts.length === 0 || configHosts.indexOf(linkOrigin) === -1) {
            isExternal = true;
        }
    }
    return isExternal;
}
exports.default = detectExternalLink;
