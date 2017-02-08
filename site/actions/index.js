import _ from 'lodash';
import * as modals from './modals';
import * as app from './app';
import * as auth from './auth';
import * as checkout from './checkout';

const actions = _.assign(
  modals,
  app,
  checkout,
  auth,
);
export default actions;

