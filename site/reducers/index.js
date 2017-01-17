import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
// import auth from './auth';
import modals from './modals';
import auth from './auth';
import search from './search';

const rootReducer = combineReducers({
	auth,
	search,
	modals
});

export default rootReducer;
