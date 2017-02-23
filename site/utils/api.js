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
  console.log('0')
  const req = {
    method: bits[0],
    url: `${urler('api')}/${bits[1]}`,
    withCredentials: true,
  };
  console.log('1')
  if (req.method === 'post') {
    req.data = data;
  console.log('2')
  } else {
  console.log('3')
    req.params = data;
  }
  console.log(req);
  return axios(req);
};

export default api;
export const mock = apiMock;
