import _ from 'lodash';
import * as auth from './auth';
import * as search from './search';
import * as modals from './modals';

const actions = _.assign(
	auth,
	search,
	modals
);
export default actions

