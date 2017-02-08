import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
import checkout from './checkout';
import modals from './modals';
import auth from './auth';
import search from './search';
import app from './app';

const rootReducer = combineReducers({
  app,
	auth,
	search,
	modals,
  checkout,
});

export default rootReducer;
