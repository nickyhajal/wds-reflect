import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App/';
import Main from '../containers/Main/';
import People from '../containers/People/';
import Person from '../containers/Person/';
import Pageloader from '../containers/Pageloader/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Pageloader } />
    <Route path="/main" component={ Pageloader } />
    <Route path="/people" component={ People } />
    <Route path="/person/:id" component={ Person } />
    <Route path="*" component={ Pageloader }/>
  </Route>
);

export default routes;