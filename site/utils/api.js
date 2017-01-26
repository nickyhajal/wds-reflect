import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import apiMock from '~/utils/apiMock';
import urler from '~/utils/url';

let mockAdapter = '';
if (process.env.NODE_ENV === 'test') {
  mockAdapter = new MockAdapter(axios);
  apiMock.init(mockAdapter);
}

const api = (url, data) => {
  const bits = url.split(' ');
  const req = {
    method: bits[0],
    url: `${urler('api')}/${bits[1]}`,
    withCredentials: true,
  };
  if (req.method === 'post') {
    req.data = data;
  } else {
    req.params = data;
  }
  console.log(req);
  return axios(req);
};

export default api;
export const mock = apiMock;
