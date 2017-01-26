import _ from 'lodash';
import * as modals from './modals';
import * as app from './app';
import * as auth from './auth';

const actions = _.assign(
  modals,
  app,
  auth,
);
export default actions;

