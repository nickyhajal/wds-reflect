import C from '~/constants';

export default function url(type, protocol = 'https') {
  const urls = {
    api: C.apiUrl,
    el: 'api.worlddominationsummit.com/api',
  };
  const useUrl = urls[type];
  let useProtocol = useUrl.indexOf('wds.nky') > -1 ? 'http' : protocol;
  if (protocol && protocol.indexOf('://') === -1) {
    useProtocol += '://';
  } else if (!protocol) {
    useProtocol = '';
  }
  return `${useProtocol}${useUrl}`;
}
