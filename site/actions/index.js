import _ from 'lodash';
import * as modals from './modals';
import * as app from './app';

const actions = _.assign(
  modals,
  app,
);
export default actions;

