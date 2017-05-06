import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { Router, browserHistory } from 'react-router';
import store from '~/core/store';
import { render } from 'react-dom';
import routes from '~/core/routes';
import auth from '~/utils/auth';
import '~/styles/normalize.global.css';
import '~/styles/main.global.css';
import client from './utils/client';

Error.stackTraceLimit = Infinity;
// Init Store
// auth.getMe();

const renderApp = () => {
  render(
    <ApolloProvider store={store} client={client}>
      <Router key={Math.random()} history={browserHistory} routes={routes} />
    </ApolloProvider>,
     document.getElementById('root')
  );
};

renderApp();
if (module.hot) {
  module.hot.accept();
}
