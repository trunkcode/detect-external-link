import * as types from '../types/index.d';

export default function detectExternalLink (linkToCheck: string, options: types.configOptions): boolean {
  const configHosts: Array<string> = [];
  const finalConfig: types.configOptions = options;

  let isExternal = false;
  let linkOrigin = '';

  if (finalConfig.hosts) {
    let singleHost: string;
    for (singleHost of finalConfig.hosts) {
      if (singleHost.indexOf('http://') === 0 || singleHost.indexOf('https://') === 0) {
        configHosts.push(new URL(singleHost).hostname);
      } else {
        configHosts.push(singleHost);
      }
    }
  }

  if (linkToCheck.indexOf('http://') === 0 || linkToCheck.indexOf('https://') === 0) {
    linkOrigin = new URL(linkToCheck).hostname;
  } else if (linkToCheck.indexOf('://') === 0) {
    linkOrigin = new URL('https' + linkToCheck).hostname;
  }

  if (configHosts.length === 0 || configHosts.indexOf(linkOrigin) === -1) {
    isExternal = true;
  }

  return isExternal;
}
