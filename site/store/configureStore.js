import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production');
} else if (process.env.NODE_ENV === 'test') {
	module.exports = configureMockStore([thunk]);
} else {
  module.exports = require('./configureStore.development');
}
